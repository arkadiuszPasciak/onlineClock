import { createRouter, createWebHistory } from 'vue-router'
import Alarm from '../views/Alarm.vue'
import Countdown from '../views/Countdown.vue'
import Stopwatch from '../views/Stopwatch.vue'
import TimeZone from '../views/TimeZone.vue'

const routes = [
    {
        path: '/alarm',
        name: 'Alarm',
        component: Alarm
    },
    {
        path: '/countdown',
        name: 'Countdown',
        component: Countdown
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
