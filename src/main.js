import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'

import {createPinia} from 'pinia';
import routes from "./router/routes";
const router = createRouter({ history: createWebHistory(), routes });

const pinia = createPinia();





const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.use(pinia)
// app.use(gsap)
app.mount('#app')
