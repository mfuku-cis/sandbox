<template>
    <div>
        <b-card v-for="card in cards" no-body class="overflow-hidden">
            <b-row no-gutters>
            <b-col md="5">
                <b-card-img v-for="img in card.imgs" :src="imgpath(img)" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="7">
                <b-card-body :title="card.title">
                <b-card-text>
                    {{card.text}}
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </div>
</template>
<script>
module.exports = {
    props: {
        cards: Array
    },
    methods: {
        imgpath: imgpath
    }
}
</script>