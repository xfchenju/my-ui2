/*
 * @Description: 构建
 * @Author: chenju
 * @Date: 2022-12-02 16:51:40
 * @LastEditors: chenju
 * @LastEditTime: 2023-02-14 15:32:05
 */
import { src, dest } from 'gulp'
import fs from 'fs'
import { pkgRoot, PKG_NAME, compRoot, compOutput } from '../config'
import { run } from '../utils/run'
import delPath from '../utils/delPath'
import gulpSass from "gulp-sass"
import sass from 'sass';
import autoprefixer from 'gulp-autoprefixer'

//删除dist
export const removeDist = () => {
  console.log('删除dist')
  if (fs.existsSync(compOutput)) {
    console.log('打包目录存在')
    console.log('打包目录清空成功 可能存在未删除的文件')
    return delPath(compOutput)
  } else {
    console.log('打包目录不存在')
    console.log('打包目录创建成功')
    return fs.mkdirSync(compOutput)
  }
}

//处理样式
export const buildStyle = () => {
  console.log('处理样式')
    return src(`${compRoot}/src/**/style/**.scss`)
        .pipe(gulpSass(sass)())//把scss转为css
        .pipe(autoprefixer())
        .pipe(dest(`${compOutput}/lib/src`))
        .pipe(dest(`${compOutput}/es/src`));
};

//打包组件
export const buildComponent = async () => {
    console.log('打包组件')
    await run(`cd ${compRoot}`, compRoot)
    run('pnpm run build', compRoot)
}

// 复制组件package.json文件
export const copyCompPackageFile = async () => {
  run(`cp ${pkgRoot}/${PKG_NAME}/package.json ${compOutput}/package.json`, compOutput)
}