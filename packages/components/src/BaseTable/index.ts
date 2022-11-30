/*
 * @Description: 基础表格
 * @Author: chenju
 * @Date: 2022-01-13 16:16:11
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 17:45:43
 */
import type { App, Plugin } from "vue"
import type { BaseTableProps } from './src/types';
import BaseTable from './src/BaseTable.vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp as any)
    }
    return comp as SFCWithInstall<T>
}

export { BaseTable, BaseTableProps };
export default withInstall(BaseTable)