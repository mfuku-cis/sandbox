const inside_contents = {
    id: "only_inside",
    title: "Only Inside",
    sections: [
        {
            id: "schedule",
            title: "Schedule",
            blocks: [
                `
                オフィスアワー次の通りですが, それ以外の時も他の対応などがなければいつでも来ていただいて構いません.
                一週間の予定も以下のカレンダーの通りです.
                `,
                `オフィスアワー：水曜日 12:30～13:30`,
                {type: "inside_calender"}
            ]
        },
    ]
}