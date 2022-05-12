const router = new VueRouter({
    routes: [
        { path: "/", component: httpVueLoader("./vue/container.vue"), props: {contents: lab_contents}},
        { path: "/lab",  component: httpVueLoader("./vue/container.vue"), props: {contents: lab_contents}},
        { path: "/profile", component: httpVueLoader("./vue/container.vue"), props: {contents: prof_contents}}
    ]
})

const app = new Vue({
    el: "#app",
    router,
})