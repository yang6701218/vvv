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
                name: 'examplePage1',
                path: '/main/examplePage1',
                component: () =>
                    import('src/views/example/examplePage1/index.vue')
            },
            {
                asideMenu: true,
                title: '例子2',
                name: 'examplePage2',
                path: '/main/examplePage1',
                component: () =>
                    import('@/views/example/examplePage2/index.vue')
            }
        ]
    }
]
export const routers = [lOginRouter, ...appRouter]
