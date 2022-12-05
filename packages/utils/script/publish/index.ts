/*
 * @Description: 发布
 * @Author: chenju
 * @Date: 2022-12-02 16:55:39
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-05 10:35:41
 */
import { PKG_NAME } from '../config'
import { componentPath } from '../utils/paths'
import { run } from '../utils/run'

//发布任务
export const publish = async () => {
  //先给transitpkg升个版本
  await run('pnpm version patch', `${componentPath}/${PKG_NAME}`)
  //在dist下执行发布命令
  await run('npm publish', `${componentPath}/${PKG_NAME}`)
  // run('pnpm publish')
}