import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App';
import router from './router';

require('./styles/styles.scss');

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(router).mount('#app');
