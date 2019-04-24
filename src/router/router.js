import login from '@/login/index.vue'
import main from '@/layout/index.vue'
export const lOginRouter = {
    name: 'login',
    path: '/',
    component: login
}
export const appRouter = [
    {
        title: '菜单',
        name: 'main',
        path: '/main',
        component: main,
        children: [
            {
                asideMenu: true,
                title: '例子',
                name: 'example',
                path: '/main/example',
                component: () => import('@/views/example/index.vue')
            },
            {
                asideMenu: true,
                title: '例子2',
                name: 'Aircraft',
                path: '/main/Aircraft',
                component: () => import('@/views/Aircraft/index.vue')
            }
        ]
    }
]
export const routers = [lOginRouter, ...appRouter]
