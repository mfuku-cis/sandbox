<template>
    <b-row class="contents">
        <b-col md="9" id="sections">
            <h1>{{contents.title}}</h1>
            <bv-section v-for="sect in contents.sections" :id="sect.id" :sections="sect"></bv-section>
        </b-col>

        <b-col md="3" id="toc">
            <div class="position-fixed">
                <h5>ToC</h5>
                <b-nav :vertical="true">
                    <b-nav-item v-for="sect in contents.sections" :id="`to_${sect.id}`"  :href="`#${sect.id}`">
                        {{sect.title}}
                    </b-nav-item>
                </b-nav>
            </div>
        </b-col>
    </b-row>
</template>

<script>
module.exports = {
    props: {
        "contents": Object
    },
    components: {
        "bv-section": httpVueLoader("./bv-section.vue")
    }
}
</script>