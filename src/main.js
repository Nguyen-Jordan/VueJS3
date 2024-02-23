import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/tabler.min.css'
import '@/assets/demo.min.css'
import '@/assets/tabler-vendors.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
