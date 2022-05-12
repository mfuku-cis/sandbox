<template>
    <div>
        <ol class="unexp">
            <li v-for="item in unexp_list">{{item}}</li>
        </ol>
        <b-collapse v-if="exp_list.length > 0" :id="moreCollName()">
            <ol start="6">
                <li v-for="item in exp_list">{{item}}</li>
            </ol>
        </b-collapse>
        <b-link v-b-toggle="moreCollName()">{{expand_label}}</b-link>
    </div>
</template>

<script>
module.exports = {
    props: {
        pre_id: String,
        expand_label: String,
        unexp_list: Array,
        exp_list: Array
    },
    methods: {
        moreCollName: function() { return `${this.pre_id}-more-collapse` }
    }
}
</script>

<style>
.unexp {
    margin-bottom: 0;
}
</style>