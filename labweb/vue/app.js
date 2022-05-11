const app = new Vue({
    el: "#app",
    data: {
        contents: null
    },
    created: async function() {
        const page = window.location.search

        if (page == "?prof") {
            this.contents = prof_contents
        } else {
            this.contents = lab_contents
        }
    }
})