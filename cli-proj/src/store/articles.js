import { createStore } from "vuex";

export default {
    state: {
        projects_details: [],
        blogDetails_articles: []
    },
mutations: {
    addArticlesProjectsDetails(state, payload) {
        state.projects_details.push(payload);
    },
    addArticlesBlogDetails(state, payload) {
        // debugger;
        state.blogDetails_articles.push(...payload);
    }
},
getters: {
    articles_projects_details: state => {
        return state.projects_details;
    },
    articles_Blog_details: state => {
        // debugger;
        return state.blogDetails_articles;
    }
},
actions: {
    ADD_ARTICLE: (context, payload) => {
        context.commit('addArticlesProjectsDetails', payload);
    },
    ADD_ARTICLES_BLOG_DETAILS: (context, payload) => {
        context.commit('addArticlesBlogDetails', payload);
    }
},
modules: { }
}