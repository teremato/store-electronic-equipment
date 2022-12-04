export default {
    path: '/user',
    name: 'Пользователь',
    component: () => import('@/layouts/user.vue'),
    children: [

        {
            path: ":id",
            name: "Моя страница",
            component: () => import('@views/user/main/user-screen-main')
        },
        {
            path: ':id/friends',
            name: 'Друзья',
            component: () => import('@views/user/friends/user-screen-friends')
        },
        {
            path: ':id/feed',
            name: 'Лента',
            component: () => import('@views/user/feed/user-screen-feed')
        },
        {
            path: ':id/photos',
            name: 'Фотографии',
            component: () => import('@views/user/photos/user-screen-photos')
        },
        {
            path: ':id/settings',
            name: 'Настройки',
            component: () => import("@views/user/settings/user-screen-settings")
        },
        {
            path: ':id/games',
            name: 'Игры',
            component: () => import("@views/user/games/user-screen-games")
        }
    ]
}