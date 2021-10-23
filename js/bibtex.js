const parseAuthors = (author_txt) => {
    let authors = [author_txt]
    if(author_txt.includes(" and ")) {
        authors = author_txt.split(" and ")
    }
    const result = []
    for (let author of authors) {
        if (author.includes(",")) {
            author = author.split(", ")
            result.push(`${author[1]} ${author[0]}`)
        }
        else {
            result.push(author)
        }
    }
    return result

}

const removeTexFromFile = (tex_txt) => tex_txt.replace(/--/g, "-").replace(/~/g, " ")
const removeTexFromItm = (tex_lst_itm) => tex_lst_itm.replace(/{/g, "").replace(/}/g, "")

const bibTexToLi = (id) => {
    fetch(`./lists/${id}.bib`)
    .then((res) => {
        return res.text()
    }).then((bib_text) => {
        const bib_list = bibtexParse.toJSON(removeTexFromFile(bib_text))
        
        for (const bib of bib_list) {
            if (bib.entryType == "COMMENT") { continue }
            const bib_item = document.createElement("li")
            if (document.getElementById(id).childElementCount >= 5) {
                bib_item.className = `collapse ${id}-more-collapse`
            }
            const content = bib.entryTags
            content.title = removeTexFromItm(content.title)
            content.author = parseAuthors(content.author)

            switch (bib.entryType.toLowerCase()) {
                case "incollection":
                case "inproceedings":
                    const others = [content.booktitle]
                    if ("series" in content) { others.push(content.series) }
                    if ("volume" in content) { others.push(content.volume) }
                    if ("pages" in content) { others.push(`pp.${content.pages}`) }
                    others.push(content.year)
                    bib_item.textContent = `${content.author.join(", ")}, "${content.title}," ${others.join(", ")}.`
                    break;
                case "article":
                    bib_item.textContent = `${content.author.join(", ")}, "${content.title}," ${content.journal}, Vol.${content.volume}, No.${content.number}, pp.${content.pages}, ${content.year}.`
                default:
                    break;
            }
            document.getElementById(id).appendChild(bib_item)
        }
    })
}