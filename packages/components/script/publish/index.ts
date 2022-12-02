/*
 * @Description: 发布
 * @Author: chenju
 * @Date: 2022-12-02 16:55:39
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 16:58:25
 */
import { src, dest } from 'gulp'
import { PKG_NAME } from '../config'
import { componentPath } from '../utils/paths'
import { run } from '../utils/run'

//复制
export const copyPackage = async () => {
  return src(`${componentPath}/transitpkg/**`).pipe(dest(`${componentPath}/${PKG_NAME}/`));
};

//发布任务
export const publish = async () => {
  //先给transitpkg升个版本
  await run('pnpm version patch', `${componentPath}/transitpkg`)
  //复制到dist目录
  await copyPackage()
  //在dist下执行发布命令
  await run('npm publish', `${componentPath}/${PKG_NAME}`)
  // run('pnpm publish')
}