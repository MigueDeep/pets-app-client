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
        path: "/inicio",
        name: "Inicio",
        component: () => import('../components/Inicio.vue'),

        children: [
            {
                path: "/adoptar",
                name: "Adoptar",
                component: () => import('../components/adopt/AdoptList.vue')
            }
        ]
    }
]

const router = new VueRouter({routes, mode: 'history'});
export default router;