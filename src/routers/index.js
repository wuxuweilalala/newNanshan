import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const PrimaryRouter = fileName => () => import( /* webpackChunkName: "PrimaryRouter" */ `@/pages/${fileName}/${fileName}.vue`);
const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/index',
            component: PrimaryRouter('situationSummary'),
        },
        {
            name: 'index2',
            path: '/index2',
            component: PrimaryRouter('situationSummary2'),
        },
        {
            name: 'propertyManagement',
            path: '/propertyManagement',
            component: PrimaryRouter('propertyManagement'),

        },
        {
            name: 'investment',
            path: '/investment',
            component: PrimaryRouter('investment'),

        },
        {
            name: 'operation',
            path: '/operation',
            component: PrimaryRouter('operation'),

        },
        {
            path: '*',
            redirect: {
                name: 'index'
            }
        },

    ]
})
export default router;
