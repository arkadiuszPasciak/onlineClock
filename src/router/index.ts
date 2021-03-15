import { createRouter, createWebHistory } from 'vue-router';
import CountdownView from '@/views/Countdown.vue';
import HomePage from '@/views/HomePage.vue';
import Stopwatch from '@/views/Stopwatch.vue';
import TimeZone from '@/views/TimeZone.vue';

const routes = [
  {
    path: '/countdown',
    name: 'Countdown',
    component: CountdownView,
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: Stopwatch,
  },
  {
    path: '/timezone',
    name: 'TimeZone',
    component: TimeZone,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
