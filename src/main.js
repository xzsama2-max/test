import { createApp } from 'vue'
import {Button} from 'vant'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.mount('#app')
