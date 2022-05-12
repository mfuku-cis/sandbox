const listpath = filename => `./lists/${filename}`
const imgpath = filename => `./fig/${filename}`

const bv_section_list = {
    props: ["items"],
    template: `
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
    `
}

const bv_section_ext_list = {
    props: {
        filename: String,
        parser: Function
    },
    components: {
        "bv-section-list": bv_section_list
    },
    template: `
        <bv-section-list :items="list"></bv-section-list>
    `,
    data: function () {
        return {
            list: null
        }
    },
    created: async function() {
        const res = await fetch(listpath(this.filename))
        const json = await res.json()
        this.list = json.map(item => this.parser(item))
    }
}

const bv_section_ext_bib = {
    props: {
        pre_id: String,
        filename: String
    },
    data: function() {
        return {
            recent: [],
            others: []
        }
    },
    template: `
        <p>
            <ol class="recent">
                <li v-for="item in recent">{{item}}</li>
            </ol>
            <b-collapse v-if="others.length > 0" :id="moreCollName()">
                <ol start="6">
                    <li v-for="item in others">{{item}}</li>
                </ol>
            </b-collapse>
            <b-link v-b-toggle="moreCollName()">More...</b-link>
        </p>
    `,
    methods: {
        moreCollName: function() { return `${this.pre_id}-more-collapse` }
    },
    created: async function () {
        const res = await fetch(listpath(this.filename))
        const bib_text = await res.text()
        const bib_list = bibtexParse.toJSON(removeTexFromFile(bib_text))

        let cnt = 0
        for(const bib of bib_list) {
            if (bib.entryType == "COMMENT") { continue }

            const content = bib.entryTags
            content.title = removeTexFromItm(content.title)
            content.author = parseAuthors(content.author)

            let item = null
            switch (bib.entryType.toLowerCase()) {
                case "incollection":
                case "inproceedings":
                    const others = [content.booktitle]
                    if ("series" in content) { others.push(content.series) }
                    if ("volume" in content) { others.push(content.volume) }
                    if ("pages" in content) { others.push(`pp.${content.pages}`) }
                    others.push(content.year)
                    if ("note" in content) { others.push(`(${content.note})`)}
                    item = `${content.author.join(", ")}, "${content.title}," ${others.join(", ")}.`
                    break;
                case "article":
                    item = `${content.author.join(", ")}, "${content.title}," ${content.journal}, Vol.${content.volume}, No.${content.number}, pp.${content.pages}, ${content.year}.`
                default:
                    break;
            }

            if (cnt >= 5) { this.others.push(item) }
            else { 
                this.recent.push(item)
                cnt++
            }
        }
    }
}

const bv_section_links = {
    props: ["items"],
    template: `
        <ul>
            <li v-for="item in items">
                <a :href="item.href" target="_blank">{{item.name}}</a>
            </li>
        </ul>
    `,
}

const bv_section_thumbs = {
    props: ["imgs"],
    template:`
        <b-row>
            <b-col v-for="img in this.imgs">
                <b-img thumbnail fluid :src="imgpath(img.filename)"></b-img>
            </b-col>
        </b-row>
    `,
    methods: {
        imgpath: imgpath
    }
}

Vue.component("bv-section", {
    props: ["sections"],
    components: {
        "bv-section-list": bv_section_list,
        "bv-section-ext-list": bv_section_ext_list,
        "bv-section-bib": bv_section_ext_bib,
        "bv-section-links": bv_section_links,
        "bv-section-thumbs": bv_section_thumbs
    },
    template: `
        <div class="bv-section">
            <h2 class="border-bottom">{{sections.title}}</h2>
            <div v-for="blc in sections.blocks">
                <h3 v-if="blc.type == 'subsect'">
                    {{blc.title}}
                </h3>
                <p v-else-if="blc.type == 'list'">
                    <bv-section-list :items="blc.items"></bv-section-list>
                </p>
                <p v-else-if="blc.type == 'ext-list'">
                    <bv-section-ext-list :filename="blc.filename" :parser="blc.parser"></bv-section-ext-list>
                </p>
                <p v-else-if="blc.type == 'bib'">
                    <bv-section-bib :pre_id="blc.id" :filename="blc.filename"></bv-section-bib>
                </p>
                <p v-else-if="blc.type == 'links'">
                    <bv-section-links :items="blc.items"></bv-section-links>
                </p>
                <div v-else-if="blc.type == 'thumbs'">
                    <bv-section-thumbs :imgs="blc.imgs" fluid-grow rounded></bv-section-thumbs>
                </div>
                <div v-else-if="blc.type == 'image'" class="image-frame">
                    <b-img :src="imgpath(blc.filename)" fluid-grow rounded></b-img>
                </div>
                <p v-else-if="blc.type == 'plain'">
                    {{blc.body}}
                </p>
                <p v-else>
                    {{blc}}
                </p>
            </div>
        </div>
    `,
    methods: {
        imgpath: imgpath
    }
})
