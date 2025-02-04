import './assets/main.css'
import 'v-calendar/style.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

library.add(fas);
import {createApp} from 'vue'
import App from './App.vue'

import axios from "@/plugins/axios.js";

import {createRouter, createWebHistory} from 'vue-router'

import {createPinia} from 'pinia';
import routes from "./router/routes";

const router = createRouter({history: createWebHistory(), routes});
const pinia = createPinia();

const app = createApp(App)
app.config.globalProperties.$filters = {
  timeAgo(date) {
    return moment(date).fromNow()
  },
}
app.use(router)
app.component('fa', FontAwesomeIcon)
app.use(pinia)
app.use(axios)
app.mount('#app')

