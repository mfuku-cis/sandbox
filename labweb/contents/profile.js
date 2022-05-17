const prof_contents = {
    id: "profile",
    title: "Masayuki Fukumitsu",
    sections: [
        {
            id: "about_fuku",
            title: "About Fukumitsu",
            blocks: [
                {
                    type: "image",
                    filename: "IMAG0573.jpg"
                },
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
            id: "courses",
            title: "Courses",
            blocks: [
                `
                    専門演習・卒業論文以外の現在の担当科目
                `,
                {
                    type: "ext-list",
                    filename: "courses.json",
                    parser: (item) => `${item.name} \t (${item.terms})`
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
                    title: "Non Peer-Reviewed and Memoirs"
                },
                {
                    type: "bib",
                    id: "non_peer_reviewed",
                    filename: "non_peer_reviewed.bib"
                }
            ]
        },
        {
            id: "awards",
            title: "Awards",
            blocks: [
                {
                    type: "ext-list",
                    filename: "awards.json",
                    parser: (item) => `${item.title} \t(${item.year})`
                }
            ]
        },
        {
            id: "garally",
            title: "Photo Garally",
            blocks: [
                {
                    type: "thumbs",
                    imgs: [
                        {filename: "garally/4Y4NseOtKz4BoX.jpg"},
                        {filename: "garally/NPhW8iU3ad8OFy.jpg"},
                        {filename: "garally/DSC_0326.JPG"},
                        {filename: "garally/IMG_3064.JPG"},
                        {filename: "garally/aHx9wDFE4QUps9.jpg"}
                    ]
                },
                {
                    type: "thumbs",
                    imgs: [
                        {filename: "garally/DSC_0092.JPG"},
                        {filename: "garally/DSC_0426.JPG"},
                        {filename: "garally/DSC_0149.JPG"},
                        {filename: "garally/DSC_0048.JPG"}
                    ]
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