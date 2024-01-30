import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: () => import('../components/LandingPage.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        component: () => import('../components/Register.vue')
    } 
]

const router = new VueRouter({routes, mode: 'history'});
export default router;