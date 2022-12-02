/*
 * @Description: 构建
 * @Author: chenju
 * @Date: 2022-12-02 16:51:40
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 18:06:27
 */
import { PKG_NAME } from '../config'
import { componentPath } from '../utils/paths'
import { run } from '../utils/run'
import delPath from '../utils/delPath'

//删除dist
export const removeDist = () => {
  return delPath(`${componentPath}/${PKG_NAME}`)
}

//打包组件
export const buildComponent = async () => {
    await run(`cd ${componentPath}`, componentPath)
    run('pnpm run build', componentPath)
}