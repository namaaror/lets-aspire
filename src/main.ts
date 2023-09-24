import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(createPinia())
app.use(PrimeVue);

app.mount('#app')