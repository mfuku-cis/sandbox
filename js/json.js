const formCourseLi = (course_dic) => `${course_dic.name} (${course_dic.terms}, ${course_dic.univ})`
const formAwardLi = (title_dic) => `${title_dic.title} (${title_dic.year})`

const JSONtoLi = (id, formatter) => {
    fetch(`./lists/${id}.json`)
    .then((res) => {
        return res.json()
    }).then((json) => {
        for (const item_dic of json) {
            const li = document.createElement("li")
            li.textContent = formatter(item_dic)
            document.getElementById(id).appendChild(li)
        }
    })
}