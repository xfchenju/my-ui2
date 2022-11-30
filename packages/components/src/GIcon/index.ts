/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 18:35:33
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 18:41:47
 */
import { App } from 'vue'
import GIcon from './GIcon.vue';

GIcon.install = (App: App) => {
	App.component('GIcon', GIcon);
};

export { GIcon };
export default GIcon;
