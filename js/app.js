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
        const res = await fetch(`./lists/${this.filename}`)
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
        const res = await fetch(`./lists/${this.filename}`)
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

Vue.component("bv-section", {
    props: ["sections"],
    components: {
        "bv-section-list": bv_section_list,
        "bv-section-ext-list": bv_section_ext_list,
        "bv-section-bib": bv_section_ext_bib,
        "bv-section-links": bv_section_links
    },
    template: `
        <div class="bv-section">
            <h2>{{sections.title}}</h2>
            <div v-for="par in sections.paragraphs">
                <h3 v-if="par.type == 'subsect'">
                    {{par.title}}
                </h3>
                <p v-else-if="par.type == 'list'">
                    <bv-section-list :items="par.items"></bv-section-list>
                </p>
                <p v-else-if="par.type == 'ext-list'">
                    <bv-section-ext-list :filename="par.filename" :parser="par.parser"></bv-section-ext-list>
                </p>
                <p v-else-if="par.type == 'bib'">
                    <bv-section-bib :pre_id="par.id" :filename="par.filename"></bv-section-bib>
                </p>
                <p v-else-if="par.type == 'links'">
                    <bv-section-links :items="par.items"></bv-section-links>
                </p>
                <p v-else-if="par.type == 'plain'">
                    {{par.body}}
                </p>
                <p v-else>
                    {{par}}
                </p>
            </div>
        </div>
    `
})

const app = new Vue({
    el: "#app",
    data: {
        contents: null
    },
    created: async function() {
        const page = window.location.search

        if (page == "?prof") {
            this.contents = prof_contents
        } else {
            this.contents = lab_contents
        }
    }
})