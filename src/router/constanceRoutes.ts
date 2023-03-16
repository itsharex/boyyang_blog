/**
 * @Author: boyyang
 * @Date: 2022-04-04 16:23:46
 * @LastEditTime: 2023-03-06 15:14:19
 * @LastEditors: boyyang
 * @Description: 静态路由
 * @FilePath: \blog_web\src\router\constanceRoutes.ts
 * @[如果痛恨所处的黑暗，请你成为你想要的光。 --塞尔维亚的天空]
 */

import { RouteRecordRaw } from 'vue-router'
const constantRoutes: RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     redirect: '/homePage',
    //     meta: {
    //         title: '首页',
    //     },
    //     children:[],
    //     component: () => import('@/views/home/index.vue'),
    // },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录注册',
        },
        component: () => import('@/views/login/index.vue'),
    },
]

export { constantRoutes }
