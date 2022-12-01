/*
 * @Description: 用户相关
 * @Author: chenju
 * @Date: 2022-07-12 13:56:57
 * @LastEditors: qingyang
 * @LastEditTime: 2022-08-04 11:23:43
 */

// 角色对应关系
export const rolesMap = new Map<keyof typeof rolesCnEnum, (keyof typeof rolesCnEnum)[]>([
  ['ghg_admin', ['ghg_biz_admin', 'ghg_user', 'ghg_fill_user', 'ghg_review_user']],
  ['ghg_biz_admin', ['ghg_fill_user', 'ghg_review_user']],
  ['ghg_tenant_admin', ['ghg_biz_admin', 'ghg_fill_user', 'ghg_review_user', 'ghg_tenant_admin']]
]);

export enum rolesCnEnum {
  // 新版盘查管理员
  'ghg_admin' = '盘查管理员',
  // 新盘查业务管理员
  'ghg_biz_admin' = '业务管理员',
  // 新版盘查用户
  'ghg_user' = '盘查用户',
  // 新盘查数据填报员
  'ghg_fill_user' = '数据填报员',
  // 新盘查数据复核员
  'ghg_review_user' = '数据复核员',
  // 租户管理员
  'ghg_tenant_admin' = '租户管理员'
}
