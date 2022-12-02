/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-12-02 18:05:23
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 18:06:42
 */
import { series } from 'gulp'
import { removeDist, buildComponent } from './index'

export default series(
    async () => removeDist(),
    async () => buildComponent()
)
