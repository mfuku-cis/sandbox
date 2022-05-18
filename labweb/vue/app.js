const cont_templ_path = "./vue/container.vue"
const router = new VueRouter({
    routes: [
        { path: "/lab",  component: httpVueLoader(cont_templ_path), props: {contents: lab_contents}},
        { path: "/lab.*",  component: httpVueLoader(cont_templ_path), props: {contents: lab_contents}},
        { path: "/profile", component: httpVueLoader(cont_templ_path), props: {contents: prof_contents}},
        { path: "/profile.*", component: httpVueLoader(cont_templ_path), props: {contents: prof_contents}},
        { path: "/only_inside", component: httpVueLoader(cont_templ_path), props: {contents: inside_contents}},
        { path: "/*", component: httpVueLoader(cont_templ_path), props: {contents: lab_contents}}
    ]
})

const app = new Vue({
    el: "#app",
    router,
})