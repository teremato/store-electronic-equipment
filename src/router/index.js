import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Добро пожаловать!',
        component: () => import('@views/home/home-screen'),
        meta: {
            layout: "app-default-layout"
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Ошибка',
        component: () => import('@views/errors/app-error'),
        meta: {
            layout: "app-default-layout"
        }
    },
    {
        path: '/games/:slug',
        name: 'Страница товара',
        component: () => import('@views/shop-item/shop-item-screen'),
        meta: {
            layout: "app-default-layout"
        }
    },
    {
        path: '/user/:name',
        name: 'Пользователь',
        component: () => import('@views/user/main/user-screen-main'),
        meta: {
            layout: "app-user-layout"
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
