import { createRouter, createWebHashHistory } from "vue-router"
import Login from '../pages/Login'
import Map from '../pages/Map'
import Information from '../pages/Information'
import Area from '../pages/Area'
import DataQuery from '../pages/DataQuery'
import Feedback from '../pages/Feedback'

const routes = [
    {
        path: '/index',
        component: Map
    },
    {
        path: '/',
        component: Login
    }, {
        path: '/information',
        component: Information
    },
    {
        path: '/area',
        component: Area
    },
    {
        path: '/dataquery',
        component: DataQuery
    },
    {
        path: '/feedback',
        component: Feedback
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router