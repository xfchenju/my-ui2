/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-12-02 16:34:09
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 16:57:23
 */
import { series } from 'gulp'
import { publish } from './index'

export default series(
    async () => publish()
)
