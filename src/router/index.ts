import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home/home.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
