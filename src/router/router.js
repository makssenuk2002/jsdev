import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('../pages/MainPage.vue'),
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    hashbang: false, // Removes the hashbang from the url
    linkActiveClass: 'open active',
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
});
export default router;
