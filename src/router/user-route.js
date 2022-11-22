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
    ]
}