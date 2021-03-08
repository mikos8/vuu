import { createApp } from 'vue'
import App from './App.vue'
import Header from './Header'
import './theme.css'

const app = createApp(App)
app.mount('#app')

app.component('TheHeader', Header)
