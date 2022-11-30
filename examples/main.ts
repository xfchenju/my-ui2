/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 15:55:34
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 17:09:19
 */
import {createApp} from 'vue'
import App from './App.vue'
import { Button } from '@xfchenju/my-ui2'
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'

const app = createApp(App)

// app.use(ElementPlus)
app.component('my-button', Button)
app.mount('#app')