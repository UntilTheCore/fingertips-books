import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue'
import Page404 from '@/views/Page404.vue'
import Labels from '@/views/Labels.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/labels'
    },
    {
      path: '/labels',
      name: 'Labels',
      component: Labels
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },{
        path: '*',
        name: '404',
        component: Page404
    }
    
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    routes
});

export default router;
