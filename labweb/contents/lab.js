const lab_contents = {
    title: "FukuLab",
    sections: [
        {
            id: "about",
            title: "About FukuLab",
            blocks: [
                `
                FukuLab (福光研究室) は2022年度情報セキュリティ学科に開設された新しい研究室です.
                次を主な研究テーマとしています.
                `,
                {
                    type: "list",
                    items: [
                        "新たな暗号方式の開発",
                        "暗号方式を基にした新たなアプリケーションの開発",
                        "暗号方式の理論的安全性証明"
                    ]
                }
            ]
        },
        {
            id: "adv_crypto",
            title: "新たな暗号方式の開発",
            blocks:[
                `
                暗号方式というと, 秘密のデータを第三者に知られないよう秘匿化するものや, ディジタル署名のように「誰がこのデータを作成したか」を保証するための技術などが思い当たると思いますが.
                現在は, それに加え暗号化したまま統計処理ができたり,
                複数人のメンバーが作成データを保証する署名などの+αの方式が開発されていたりします.
                FukuLabでは, 従来の暗号・署名+αの技術（これらを高機能暗号・署名という）を開発します.
                `,
                `
                ちなみに, これまでにマルチ署名やグループ署名の開発を行ってきました.
                `
            ]
        },
        {
            id: "crypto_app",
            title: "暗号方式を基にした新たなアプリケーションの開発",
            blocks: [
                `
                暗号をベースとしてアプリケーションは世の中にたくさんあります.
                これまでに, 以下の研究開発に携わってきました.
                `,
                {
                    "type": "list",
                    "items":[
                        "FIDOの端末追加プロトコル",
                        "分散管理型のパスワードマネージャ",
                        "ブロックチェーンを用いた相互協力運用型のセキュアストレージ"
                    ]
                }
            ]
        },
        {
            id: "prov_sec",
            title: "暗号方式の理論的安全性証明",
            blocks: [
                `
                暗号技術を開発する場合, 「数学的に安全性を証明する」ことが主流となっています.
                この安全性証明は容易ではなく, 時に理想的な条件下で証明されることがあります.
                そこで, この理想的な条件をどれがけ緩和できるか, またはどれだけ緩和すると安全性証明ができなくなるかについて研究しています.
                `,
                `
                教員本人は, Schnorr署名と呼ばれる署名やその一般系のFiat-Shamir型の署名の安全性証明について主に研究しています.
                `
            ]
        },
    ]
}