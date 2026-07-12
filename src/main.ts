import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'
import '@/styles/main.css'
import App from './App.vue'

const app = createApp(App)

// Pinia 状态管理
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// 约定式路由（由 vite-plugin-pages 自动生成）
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)

// Element Plus UI 库
app.use(ElementPlus)

app.mount('#app')
