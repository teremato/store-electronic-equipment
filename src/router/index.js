import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Добро пожаловать!',
        component: () => import('@views/home/home-screen')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Ошибка',
        component: () => import('@views/errors/app-error')
    },
    {
        path: '/games/:slug',
        name: 'Страница товара',
        component: () => import('@views/shop-item/shop-item-screen')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     document.title = to.name;
//     next();
// });

export default router
