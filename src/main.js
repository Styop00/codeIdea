import './assets/main.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
library.add(fas);
import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'

import {createPinia} from 'pinia';
import routes from "./router/routes";
const router = createRouter({ history: createWebHistory(), routes });
const pinia = createPinia();
const globalOptions = {
  mode: 'auto',
};
const app = createApp(App)
app.use(router)
app.component('fa', FontAwesomeIcon)
app.use(pinia)
app.use(ElementPlus);
app.use(VueTelInput,globalOptions);
app.mount('#app')
app.use(VCalendar, {})

