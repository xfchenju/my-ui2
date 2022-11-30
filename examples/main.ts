/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 15:55:34
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 16:08:46
 */
import {createApp} from 'vue'
import App from './App.vue'
import { Button } from 'my-ui2'

const app = createApp(App)

app.component('my-button', Button)

app.mount('#app')