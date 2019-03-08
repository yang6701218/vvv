import login from '@/login/index.vue';
import main from '@/components/home.vue';
export const lOginRouter = {
    name: 'login',
    path: '/',
    component: login,
};
export const appRouter = [
    {
        title: '系统首页',
        name: 'home',
        path: '/home',
        component: main,
        children: [
            {
                title: '店铺列表',
                name: 'shopList',
                path: '/home/shopList',
                component: () => import('@/views/shopLits/index.vue'),
            },
            {
                title: '店铺装卸',
                name: 'shopDecoration',
                path: '/home/shopDecoration',
                component: () => import('@/views/shopDecoration/index.vue'),
            },
        ],
    },
];
export const routers = [lOginRouter, ...appRouter];
