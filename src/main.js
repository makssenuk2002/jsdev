import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router.js'
const app = createApp(App)
import store from './store/store.js'

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
