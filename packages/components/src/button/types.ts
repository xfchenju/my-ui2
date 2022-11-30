/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 16:06:57
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 16:07:05
 */
import { ExtractPropTypes } from 'vue'


export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];


export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>