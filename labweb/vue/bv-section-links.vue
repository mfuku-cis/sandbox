<template>
    <ul>
        <li v-for="item in items">
            <a :href="item.href" target="_blank">{{item.name}}</a>
        </li>
    </ul>
</template>

<script>
module.exports = {
    props: {
        items: Array
    }
}
</script>