import { resolve } from 'path'

// 项目根目录
export const projRoot = resolve(__dirname, '..', '..');
// packages根目录
export const pkgRoot = resolve(projRoot, 'packages')
// 组件库根目录
export const compRoot = resolve(pkgRoot, 'components')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/my-ui2` */
export const compOutput = resolve(buildOutput, 'my-ui2')

export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(compRoot, 'package.json')