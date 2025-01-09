import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

import { createApp } from 'vue'
import App from './App.vue'

import routes from '@/router/routes.js'
import {createRouter, createWebHistory} from 'vue-router'
const router = createRouter({ history: createWebHistory(), routes });

import {createPinia} from 'pinia';
const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.use(pinia)
app.mount('#app')
