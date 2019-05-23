import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/components/' + file + '/index.vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '首页',
            component: _import('home'),
            meta: {
                level: 0
            }
        }
    ] 
})
