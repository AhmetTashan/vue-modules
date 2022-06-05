import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/modules/modules.js'
import '@/assets/styles/App.scss'


const app = createApp(App);
app.use(store).use(router).mount('#app')
