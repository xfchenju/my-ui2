/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 15:59:06
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 18:03:05
 */
export { default as withInstall } from "./withinstall"
export { buildUUID, buildShortUUID } from "./uuid"
export { throwError, debugWarn } from "./baseError"

/**
 * @Description: 移除对象中的undefined元素
 * @param {any} params
 * @return {*}
 */
 export const removeUndefinedParams = (params: any) => {
  const ans: any = {};
  for (const i in params) {
    if (typeof params[i] === 'undefined') {
      continue;
    }
    ans[i] = params[i];
  }
  return ans;
};