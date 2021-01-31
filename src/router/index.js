import { createRouter, createWebHistory } from 'vue-router'
import Alarm from '../views/Alarm.vue'
import Clock from '../views/Clock.vue'
import Countdown from '../views/Countdown.vue'
import Stopwatch from '../views/Stopwatch.vue'

const routes = [
  {
    path: '/alarm',
    name: 'Alarm',
    component: Alarm
  },
  {
    path: '/clock',
    name: 'Clock',
    component: Clock
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
