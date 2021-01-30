import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('./styles/styles.scss');

createApp(App).use(router).mount('#app')
