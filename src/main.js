import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';


import router from './router'

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

createApp(App).use(router).use(echarts).mount('#app')

