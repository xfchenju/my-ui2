/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-12-02 16:00:19
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-05 14:10:53
 */
import { series, parallel } from 'gulp'
import { removeDist, buildStyle, buildComponent } from './index'

export default series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
)
