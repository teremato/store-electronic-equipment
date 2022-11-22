import { createRouter, createWebHistory } from 'vue-router'

import userRoute from '@/router/user-route'
import defaultRoute from '@/router/default-route'


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        ...defaultRoute,
        userRoute
    ]
})

export default router
