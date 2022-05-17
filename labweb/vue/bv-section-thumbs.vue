<template>
    <b-row>
        <b-col v-for="img in this.imgs" :md="colSize()">
            <b-img thumbnail fluid :src="imgpath(img.filename)"></b-img>
        </b-col>
    </b-row>
</template>

<script>
module.exports = {
    props: ["imgs"],
    methods: {
        imgpath: imgpath,
        colSize: function() {
            return Math.max(Math.floor(12/this.imgs.length), 3)
        }
    }
}
</script>