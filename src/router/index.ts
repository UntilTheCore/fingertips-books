import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
      path: '/labels',
      name: 'Labels',
      component: () => import('@/views/Labels.vue')
    },
    {
        path: '/labels/edit/:id',
        component: () => import('@/views/EditLabel.vue')
    },
    {
        path: '/money',
        name: 'Money',
        component: () => import('@/views/Money.vue')
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('@/views/Statistics.vue')
    },{
        path: '*',
        name: '404',
        component: () => import('@/views/Page404.vue')
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
