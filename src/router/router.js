import login from '@/login/index.vue'
import main from '@/components/home.vue'
export const lOginRouter = {
    name: 'login',
    path: '/',
    component: login
}
export const appRouter = [
    {
        title: '系统首页',
        name: 'group',
        path: '/group',
        component: main,
        children: [
            {
                asideMenu: false,
                title: '集团情况',
                name: 'groupHappening',
                path: '/group/groupHappening',
                component: () =>
                    import('@/views/group/groupHappening/index.vue')
            },
            {
                asideMenu: false,
                title: '页面管理',
                name: 'grouppage',
                path: '/group/grouppage',
                component: () => import('@/views/group/grouppage/index.vue')
            },
            {
                asideMenu: true,
                title: '模板管理',
                name: 'grouptemplate',
                path: '/group/grouptemplate',
                component: () => import('@/views/group/grouptemplate/index.vue')
            }
        ]
    },
    {
        title: '权限管理',
        name: 'permission',
        path: '/permission',
        component: main,
        children: [
            {
                asideMenu: false,
                title: '菜单管理',
                name: 'permissionmenu',
                path: '/permission/permissionmenu',
                component: () =>
                    import('@/views/permission/permissionmenu/index.vue')
            },
            {
                asideMenu: false,
                title: '角色情况',
                name: 'permissioncharacter',
                path: '/permission/permissioncharacter',
                component: () =>
                    import('@/views/permission/permissioncharacter/index.vue')
            }
        ]
    },
    {
        title: '商品',
        name: 'commodity',
        path: '/commodity',
        component: main,
        children: [
            {
                asideMenu: false,
                title: '商品管理',
                name: 'commoditymanagement',
                path: '/commodity/commoditymanagement',
                component: () =>
                    import('@/views/commodity/commoditymanagement/index.vue')
            },
            {
                asideMenu: false,
                title: '商品分类',
                name: 'commodityclassification',
                path: '/commodity/commodityclassification',
                component: () =>
                    import('@/views/commodity/commodityclassification/index.vue')
            },
            {
                asideMenu: false,
                title: '商品分组',
                name: 'commodityGrouping',
                path: '/commodity/commodityGrouping',
                component: () =>
                    import('@/views/commodity/commodityGrouping/index.vue')
            },
            {
                asideMenu: false,
                title: '商品参数',
                name: 'commodityparameter',
                path: '/commodity/commodityparameter',
                component: () =>
                    import('@/views/commodity/commodityparameter/index.vue')
            },
            {
                asideMenu: false,
                title: '新增商品参数',
                name: 'commodityparameteradd',
                path: '/commodity/commodityparameteradd',
                component: () =>
                    import('@/views/commodity/commodityparameteradd/index.vue')
            },
            {
                asideMenu: false,
                title: '新增商品',
                name: 'commodityadd',
                path: '/commodity/commodityadd',
                component: () =>
                    import('@/views/commodity/commodityadd/index.vue')
            }
        ]
    },
    {
        title: '订单',
        name: 'Order',
        path: '/Order',
        component: main,
        children: [
            {
                asideMenu: false,
                title: '订单概况',
                name: 'OrderOverview',
                path: '/Order/OrderOverview',
                component: () => import('@/views/Order/OrderOverview/index.vue')
            },
            // {
            //     title: '订单管理',
            //     name: 'commodityclassification',
            //     path: '/commodity/commodityclassification',
            //     component: () =>
            //         import('@/views/commodity/commodityclassification/index.vue'),
            // },
            {
                asideMenu: false,
                title: '退货维权',
                name: 'OrderReturn',
                path: '/Order/OrderReturn',
                component: () => import('@/views/Order/OrderReturn/index.vue')
            },
            {
                asideMenu: false,
                title: '批量发货',
                name: 'OrderShip',
                path: '/Order/OrderShip',
                component: () => import('@/views/Order/OrderShip/index.vue')
            }
        ]
    },
    {
        title: '客户',
        name: 'client',
        path: '/client',
        component: main,
        children: [
            {
                asideMenu: false,
                title: '客户管理',
                name: 'clientmanagement',
                path: '/client/clientmanagement',
                component: () =>
                    import('@/views/client/clientmanagement/index.vue')
            },
            {
                asideMenu: false,
                title: '客户运营',
                name: 'clientOperation',
                path: '/client/clientOperation',
                component: () =>
                    import('@/views/client/clientOperation/index.vue')
            },
            {
                asideMenu: false,
                title: '会员管理',
                name: 'clientmember',
                path: '/client/clientmember',
                component: () => import('@/views/client/clientmember/index.vue')
            },
            {
                asideMenu: false,
                title: '会员卡',
                name: 'clientmembercard',
                path: '/client/clientmembercard',
                component: () =>
                    import('@/views/client/clientmembercard/index.vue')
            },
            {
                asideMenu: false,
                title: '会员储值',
                name: 'clientenergy',
                path: '/client/clientenergy',
                component: () => import('@/views/client/clientenergy/index.vue')
            },
            {
                asideMenu: false,
                title: '标签管理',
                name: 'clientlabel',
                path: '/client/clientlabel',
                component: () => import('@/views/client/clientlabel/index.vue')
            },
            {
                asideMenu: false,
                title: '积分管理',
                name: 'clientintegral',
                path: '/client/clientintegral',
                component: () =>
                    import('@/views/client/clientintegral/index.vue')
            }
        ]
    }
]
export const routers = [lOginRouter, ...appRouter]
