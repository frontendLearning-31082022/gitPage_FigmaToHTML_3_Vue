import { createStore } from "vuex";

export default {
    state: {
        projects_details: ['asd']
    },
    mutations: {
        addArticlesProjectsDetails(state, payload) {
            debugger;
            state.projects_details.push(payload);
        }
    },
    getters: {},
    actions: {
        ADD_ARTICLE: (context, payload) => {
            context.commit('addArticlesProjectsDetails', payload);
        }
    },
    modules: {}
}