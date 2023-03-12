import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import {gsap} from "gsap";


const app = createApp(App)
app.use(router)

app.mount('#app')
