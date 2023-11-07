import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '../components/pages/NotFound.vue'
import BlogDetailPage from '../components/pages/BlogDetailPage.vue'
import HomePage from '../components/pages/HomePage.vue'
import BlogPage from '../components/pages/BlogPage.vue'
import ProjectsDetails from '../components/pages/ProjectsDetails.vue'
import ProjectsPage from '../components/pages/ProjectsPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/BlogDetailPage',
        name: 'BlogDetailPage',
        component: BlogDetailPage
    },
    {
        path: '/BlogPage',
        name: 'BlogPage',
        component: BlogPage
    },
    {
        path: '/ProjectsDetails',
        name: 'ProjectsDetails',
        component: ProjectsDetails
    },
    {
        path: '/ProjectsPage',
        name: 'ProjectsPage',
        component: ProjectsPage
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.name;

    let meta = document.createElement('meta');
    meta.setAttribute('description', 'fig ma completed page');
    document.getElementsByTagName('head')[0].appendChild(meta);

    next();
});

export default router