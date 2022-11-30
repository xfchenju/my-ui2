/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 18:13:23
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 18:14:22
 */
import icon from './icon.vue'
import type { App, Plugin } from "vue"
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp as any)
    }
    return comp as SFCWithInstall<T>
}
const Icon = withInstall(icon)
export default Icon