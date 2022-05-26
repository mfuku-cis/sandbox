<template>
        <div class="bv-section">
            <h2 class="border-bottom">{{sections.title}}</h2>
            <div v-for="blc in sections.blocks">
                <h3 v-if="blc.type == 'subsect'">
                    {{blc.title}}
                </h3>
                <p v-else-if="blc.type == 'list'">
                    <bv-section-list :items="blc.items"></bv-section-list>
                </p>
                <p v-else-if="blc.type == 'ext-list'">
                    <bv-section-ext-list :filename="blc.filename" :parser="blc.parser"></bv-section-ext-list>
                </p>
                <p v-else-if="blc.type == 'bib'">
                    <bv-section-bib :pre_id="blc.id" :filename="blc.filename"></bv-section-bib>
                </p>
                <p v-else-if="blc.type == 'links'">
                    <bv-section-links :items="blc.items"></bv-section-links>
                </p>
                <div v-else-if="blc.type == 'thumbs'">
                    <bv-section-thumbs :imgs="blc.imgs" fluid-grow rounded></bv-section-thumbs>
                </div>
                <div v-else-if="blc.type == 'image'" class="image-frame">
                    <b-img :src="imgpath(blc.filename)" fluid-grow rounded></b-img>
                </div>
                <div v-else-if="blc.type == 'cards'">
                    <bv-section-cards :cards="blc.cards"></bv-section-cards>
                </div>
                <p v-else-if="blc.type == 'inside_calender'">
                    <bv-inside-section-gcal></bv-inside-section-gcal> 
                </p>
                <p v-else-if="blc.type == 'plain'">
                    {{blc.body}}
                </p>
                <p v-else>
                    {{blc}}
                </p>
            </div>
        </div>
</template>

<script>
module.exports = {
    props: {
        "sections": Object
    },
    components: {
        "bv-section-list": httpVueLoader("./bv-section-list.vue"),
        "bv-section-ext-list": httpVueLoader("./bv-section-ext-list.vue"),
        "bv-section-bib": httpVueLoader("./bv-section-ext-bib.vue"),
        "bv-section-links": httpVueLoader("./bv-section-links.vue"),
        "bv-section-thumbs": httpVueLoader("./bv-section-thumbs.vue"),
        "bv-inside-section-gcal": httpVueLoader("./bv-inside-section-gcal.vue"),
        "bv-section-cards": httpVueLoader("./bv-section-cards.vue")
    },
    methods: {
        imgpath: imgpath
    }
}
</script>