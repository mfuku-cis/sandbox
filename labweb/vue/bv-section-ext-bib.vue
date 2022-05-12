<template>
    <bv-section-expandable-list :unexp_list="recent" :exp_list="others" :pre_id="pre_id" expand_label="More..."></bv-section-expandable-list>
</template>

<script>

module.exports = {
    props: {
        pre_id: String,
        filename: String
    },
    components: {
        "bv-section-expandable-list": httpVueLoader("./bv-section-expandable-list.vue") 
    },
    data: function() {
        return {
            recent: [],
            others: []
        }
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
</script>