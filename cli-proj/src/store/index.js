import { createStore } from "vuex";
import articles from "./articles";

// const articles = {
//     state: () => ({
//         name: "John Doe",
//         age: "28"
//     }),
//     mutations: {},
//     actions: {},
//     getters: {}
// }

export default createStore({
    modules: { articles: articles }
}) 