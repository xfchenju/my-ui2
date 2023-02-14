/*
 * @Description: 
 * @Author: chenju
 * @Date: 2023-02-13 18:21:52
 * @LastEditors: chenju
 * @LastEditTime: 2023-02-14 17:35:09
 */
import { series, parallel } from 'gulp'
import { removeDist, buildStyle, buildComponent, copyCompPackageFile } from './index'

export default series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    ),
    () => copyCompPackageFile()
)
