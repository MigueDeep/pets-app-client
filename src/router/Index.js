import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: () => import('../components/LandingPage.vue')
    } ,
    {
        path: '/adoption',
        name: 'Adoption',
        component: () => import('../components/Apodtion/FormAdoption.vue')
    }
]

const router = new VueRouter({routes, mode: 'history'});
export default router;