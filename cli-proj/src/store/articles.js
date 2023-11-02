import { createStore } from "vuex";

export default {
    state: {
        projects_details: []
    },
    mutations: {
        addArticlesProjectsDetails(state, payload) {
            state.projects_details.push(payload);
        }
    },
    getters: {
        articles_projects_details: state=> {
            return state.projects_details;
        }
    },
    actions: {
        ADD_ARTICLE: (context, payload) => {
            context.commit('addArticlesProjectsDetails', payload);
        }
    },
    modules: {}
}