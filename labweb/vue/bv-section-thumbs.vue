<template>
    <b-row>
        <b-col v-for="img in this.imgs">
            <b-img thumbnail fluid :src="imgpath(img.filename)"></b-img>
        </b-col>
    </b-row>
</template>

<script>
module.exports = {
    props: ["imgs"],
    methods: {
        imgpath: imgpath
    }
}
</script>