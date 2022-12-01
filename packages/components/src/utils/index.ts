/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-12-01 11:22:05
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-01 11:22:22
 */
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