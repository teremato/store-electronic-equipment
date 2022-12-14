export default [
    {
        path: '/',
        name: 'Добро пожаловать!',
        component: () => import('@views/home/home-screen'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Ошибка',
        component: () => import('@views/errors/app-error'),
    },
    {
        path: '/games/:slug',
        name: 'Страница товара',
        component: () => import('@views/shop-item/shop-item-screen'),
    },
    {
        path: '/cart',
        name: 'Корзина',
        component: () => import('@views/cart/cart-screen')
    }
]