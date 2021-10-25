const formCourseLi = (course_dic) => `${course_dic.name} (${course_dic.terms}, ${course_dic.univ})`
const formAwardLi = (title_dic) => `${title_dic.title} (${title_dic.year})`

const ary2Li = (fromAry, ToID, formatter) => {
    for (const item_dic of fromAry) {
        const li = document.createElement("li")
        li.textContent = formatter(item_dic)
        document.getElementById(ToID).appendChild(li)
    }
}

const JSON2Li = (id, formatter) => {
    fetch(`./lists/${id}.json`)
    .then((res) => {
        return res.json()
    }).then((json) => {
        ary2Li(json, id, formatter)
    })
}

const JSONAry2Li = (id, key, formatter) => {
    fetch(`./lists/${id}.json`)
    .then((res) => {
        return res.json()
    }).then((json) => {
        ary2Li(json[key], id, formatter)
    })
}