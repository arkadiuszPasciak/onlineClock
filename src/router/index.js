import { createRouter, createWebHistory } from 'vue-router'
import Alarm from '../views/Alarm'
import CountdownView from '../views/CountdownView'
import Stopwatch from '../views/Stopwatch'
import TimeZone from '../views/TimeZone'

const routes = [
    {
        path: '/alarm',
        name: 'Alarm',
        component: Alarm
    },
    {
        path: '/countdown',
        name: 'Countdown',
        component: CountdownView
    },
    {
        path: '/stopwatch',
        name: 'Stopwatch',
        component: Stopwatch
    },
    {
        path: '/timezone',
        name: 'TimeZone',
        component: TimeZone
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
