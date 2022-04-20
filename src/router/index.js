import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../pages/Login'
import Map from '../pages/Map'

const routes = [
    {
        path: '/index',
        component: Map
    },
    {
        path: '/login',
        component: Login
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router