const prof_contents = {
    title: "Masayuki Fukumitsu",
    sections: [
        {
            id: "profile",
            title: "Profile",
            blocks: [
                {
                    type: "list",
                    items: [
                    "福光 正幸 (Fukumitsu, Masayuki)",
                    "宮城県仙台市出身",
                    "長崎県立大学 情報システム学部 情報セキュリティ学科 准教授",
                    "博士 (情報科学)",
                    "暗号と情報セキュリティ分野の研究者"
                    ]
                }
            ]
        },
        {
            id: "biography",
            title: "Biography",
            blocks: [
                {
                    type: "ext-list",
                    filename: "biography.json",
                    parser: (item) => `${item.head} \t: ${item.body}`
                }
            ]
        },
        {
            id: "publication",
            title: "Publication",
            blocks: [
                {
                    type: "subsect",
                    title: "Peer-Reviewed"
                },
                {
                    type: "bib",
                    id: "peer_reviewed",
                    filename: "peer_reviewed.bib"
                },
                {
                    type: "subsect",
                    title: "Non Peer-Reviewed"
                },
                {
                    type: "bib",
                    id: "non_peer_reviewed",
                    filename: "non_peer_reviewed.bib"
                }
            ]
        },
        {
            id: "links",
            title: "Links",
            blocks: [
                {
                    type: "links",
                    items: [
                        {
                            name: "researchmap",
                            href: "https://researchmap.jp/masayuki_fukumitsu"
                        },
                        {
                            name: "DBLP",
                            href: "https://dblp.org/pid/34/8102.html"
                        },
                        {
                            name: "ORCID",
                            href: "https://orcid.org/0000-0001-7471-4477"
                        }
                    ]
                }
            ]
        }
    ]
}