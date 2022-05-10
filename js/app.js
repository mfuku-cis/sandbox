Vue.component("bv-section", {
    props: ["content"],
    template:`
        <div class="bv-section">
        <h2>{{content.title}}</h2>
        <p v-html="content.paragraph"></p>
        </div>
    `
})

const lab_contents = [
    {
        id: "about",
        title: "About FukuLab",
        paragraph: `
            FukuLab (福光研究室) は2022年度情報セキュリティ学科に開設された新しい
            研究室です.
            次のテーマを主な研究テーマとしています.
            <ol>
                <li>新たな暗号方式の開発</li>
                <li>暗号方式を基にした新たなアプリケーションの開発</li>
                <li>暗号方式の理論的安全性証明</li>
            </ol>
        `
    },
    {
        id: "adv_crypto",
        title: "新たな暗号方式の開発",
        paragraph: `
        暗号方式というと, 秘密のデータを第三者に知られないよう秘匿化するものや, ディジタル署名のように「誰がこのデータを作成したか」を保証するための技術などが思い当たると思いますが.
        現在は, それに加え暗号化したまま統計処理ができたり,
        複数人のメンバーが作成データを保証する署名などの+αの方式が開発されていたりします.
        FukuLabでは, 従来の暗号・署名+αの技術（これらを高機能暗号・署名という）を開発します.
        `
    }
]

const app = new Vue({
    el: "#app",
    data: {
        title: "FukuLab",
        contents: lab_contents
    }
})