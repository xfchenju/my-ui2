/*
 * @Description: 盘查周期
 * @Author: chenju
 * @Date: 2022-06-22 10:10:09
 * @LastEditors: chenju
 * @LastEditTime: 2022-06-24 13:21:17
 */
const localInventoryYear = [];
for (let i = 2015; i < 2050; i++) {
  localInventoryYear.push({
    label: i,
    value: i
  });
}

const localInventoryMouth = [];
const localInventoryMouthHaveAll = [];
const monthList = [];
const monthListHaveAll = [
  {
    value: '',
    label: '全部'
  }
];
for (let i = 1; i < 13; i++) {
  monthList.push({
    value: i < 10 ? `0${i}` : `${i}`,
    label: i < 10 ? `0${i}` : `${i}`
  });
  monthListHaveAll.push({
    value: i < 10 ? `0${i}` : `${i}`,
    label: i < 10 ? `0${i}` : `${i}`
  });
}
for (let i = 2015; i < 2050; i++) {
  localInventoryMouth.push({
    label: i,
    value: i,
    children: monthList.map(val => {
      return {
        label: val.label,
        value: i + val.value
      };
    })
  });
  localInventoryMouthHaveAll.push({
    label: i,
    value: i,
    children: monthListHaveAll.map(val => {
      return {
        label: val.label,
        value: i + val.value
      };
    })
  });
}

// 盘查周期 年
export const InventoryYear = localInventoryYear;

// 盘查周期 月有全部
export const InventoryMouthHaveAll = localInventoryMouthHaveAll;

// 盘查周期 月
export const InventoryMouth = localInventoryMouth;
