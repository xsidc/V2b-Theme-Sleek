import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import App from './App.vue'
import router from "@/router/index.js";
import pinia from "@/store/index.js";

import i18n from "/public/i18n/i18n.js";

const app=createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
