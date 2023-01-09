import { createApp } from 'vue'
import App from './App.vue'
import AlertaApp from './components/AlertaApp.vue'
import router from './plugins/vue-router'
import pinia from './plugins/pinia'

const app = createApp(App)
app.component("AlertaApp", AlertaApp)
app.use(router)
app.use(pinia)
app.mount('#app')
