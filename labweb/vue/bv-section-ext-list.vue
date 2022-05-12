<template>
    <bv-section-list :items="list"></bv-section-list>
</template>

<script>
module.exports = {
    props: {
        filename: String,
        parser: Function
    },
    components: {
        "bv-section-list": httpVueLoader("./bv-section-list.vue")
    },
    data: function () {
        return {
            list: null
        }
    },
    created: async function() {
        const res = await fetch(listpath(this.filename))
        const json = await res.json()
        this.list = json.map(item => this.parser(item))
    }
}
</script>