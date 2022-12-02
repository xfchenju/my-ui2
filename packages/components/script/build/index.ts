/*
 * @Description: 构建
 * @Author: chenju
 * @Date: 2022-12-02 16:51:40
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 16:57:52
 */
import { src, dest } from 'gulp'
import { PKG_NAME } from '../config'
import { componentPath } from '../utils/paths'
import { run } from '../utils/run'
import delPath from '../utils/delPath'
import gulpSass from "gulp-sass"
import sass from 'sass';
import autoprefixer from 'gulp-autoprefixer'

//删除dist
export const removeDist = () => {
  return delPath(`${componentPath}/${PKG_NAME}`)
}

//处理样式
export const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.scss`)
        .pipe(gulpSass(sass)())//把scss转为css
        .pipe(autoprefixer())
        .pipe(dest(`${componentPath}/${PKG_NAME}/lib/src`))
        .pipe(dest(`${componentPath}/${PKG_NAME}/es/src`));
};

//打包组件
export const buildComponent = async () => {
    await run(`cd ${componentPath}`, componentPath)
    run('pnpm run build', componentPath)
}