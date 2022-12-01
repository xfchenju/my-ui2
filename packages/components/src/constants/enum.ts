/*
 * @Description: 枚举常量
 * @Author: qingyang
 * @Date: 2021-01-29 11:04:50
 * @LastEditors: qingyang
 * @LastEditTime: 2022-11-15 11:07:44
 */

import { InventoryYear, InventoryMouth, InventoryMouthHaveAll } from './inventoryYear';

export { InventoryYear, InventoryMouth, InventoryMouthHaveAll };

export { rolesMap, rolesCnEnum } from './userEnum';

//世界末日
export const ENDOFWORLD = '9999-09-09';

// http请求返回的code码
export enum HTTP_RESPONSE_CODE {
  // 请求成功
  OK_CODE = 100000,
  // 校验令牌checkToken失效时
  CHECK_TOKEN_EXPIRATED_ERROR_CODE = 100004
}

export const NodeOptions = [
  {
    label: '待填报',
    value: 'WAIT_FILL'
  },
  {
    label: '待计算',
    value: 'WAIT_CALCULATE'
  },
  {
    label: '计算完成',
    value: 'FINISH'
  }
];

export enum NodeEnums {
  WAIT_FILL = 'WAIT_FILL', // 待填报
  WAIT_CALCULATE = 'WAIT_CALCULATE', // 待计算
  FINISH = 'FINISH' // 计算完成
}

/**
 * 上报管理
 */
// 填报状态
export enum fillInStatusEnum {
  NOT_FILL = '未填报',
  FILL = '已填报'
}
export const fillInStatusOption = [
  {
    label: '未填报',
    value: 'NOT_FILL'
  },
  {
    label: '已填报',
    value: 'FILL'
  }
];

export const taskStatusOptions = [
  {
    label: '未分发',
    value: 'NOT_ASSIGN'
  },
  {
    label: '未填报',
    value: 'NOT_FILL'
  },
  {
    label: '无需填报',
    value: 'NOT_NEED_FILL'
  },
  {
    label: '填报中',
    value: 'FILLING'
  },
  {
    label: '已填报',
    value: 'FILLED'
  },
  {
    label: '复核通过',
    value: 'REVIEW_PASS'
  },
  {
    label: '复核驳回',
    value: 'REVIEW_REJECT'
  },
  {
    label: '审批通过',
    value: 'CHECK_PASS'
  },
  {
    label: '审批驳回',
    value: 'CHECK_REJECT'
  }
];

export const taskUnFillStatusOptions = [
  {
    label: '未填报',
    value: 'NOT_FILL'
  },
  {
    label: '填报中',
    value: 'FILLING'
  },
  {
    label: '审批驳回',
    value: 'CHECK_REJECT'
  },
  {
    label: '复核驳回',
    value: 'REVIEW_REJECT'
  }
];
export const taskFillStatusOptions = [
  {
    label: '已填报',
    value: 'FILLED'
  },
  {
    label: '复核通过',
    value: 'REVIEW_PASS'
  },
  {
    label: '审批通过',
    value: 'CHECK_PASS'
  }
];
export const taskConfirmOptions = [
  {
    label: '复核通过',
    value: 'REVIEW_PASS'
  },
  {
    label: '复核驳回',
    value: 'REVIEW_REJECT'
  },
  {
    label: '审批通过',
    value: 'CHECK_PASS'
  },
  {
    label: '审批驳回',
    value: 'CHECK_REJECT'
  }
];

// 因子匹配状态
export enum factorMatchStatusEnum {
  NOT_MATCH = '未匹配',
  MATCH = '已匹配'
}
export const factorMatchStatusOption = [
  {
    label: '未匹配',
    value: 'NOT_MATCH'
  },
  {
    label: '已匹配',
    value: 'MATCH'
  }
];

// 数据状态
export enum dataStatusEnum {
  NOT_CALCULATE = '未计算',
  CALCULATE = '已计算'
}
export const dataStatusOption = [
  {
    label: '未计算',
    value: 'NOT_CALCULATE'
  },
  {
    label: '已计算',
    value: 'CALCULATE'
  }
];

/**
 * 因子库
 */
// 因子类型 枚举
export enum factorTypeEnum {
  '外购电力',
  '外购热力',
  '煤',
  '燃料油',
  '燃料气',
  '其他'
}
export const factorTypeOption = [
  {
    label: '外购电力',
    value: 0
  },
  {
    label: '外购热力',
    value: 1
  },
  {
    label: '煤',
    value: 2
  },
  {
    label: '燃料油',
    value: 3
  },
  {
    label: '燃料气',
    value: 4
  },
  {
    label: '其他',
    value: 5
  }
];

// 设定方法options
export const setterMethodOptions = [
  {
    label: '运营控制法',
    value: 'OPERATING_CONTROL'
  },
  {
    label: '财务控制法',
    value: 'FINANCIAL_CONTROL'
  },
  {
    label: '股权比例法',
    value: 'EQUITY_RATIO'
  }
];
export const enum DataOriginEnums {
  INSTRUMENT_MEASUREMENT = 'INSTRUMENT_MEASUREMENT',
  INVOICE_RECEIPT = 'INVOICE_RECEIPT',
  STANDING_BOOK_RECORD = 'STANDING_BOOK_RECORD',
  STOREHOUSE_RECORD = 'STOREHOUSE_RECORD',
  PURCHASE_RECORD = 'PURCHASE_RECORD'
}
export const enum SetterMethodEnums {
  OPERATING_CONTROL = 'OPERATING_CONTROL',
  FINANCIAL_CONTROL = 'FINANCIAL_CONTROL',
  EQUITY_RATIO = 'EQUITY_RATIO'
}
// 填报任务 -> 填报方式
export const enum FillTypeEnum {
  SELF_FILL = 'SELF_FILL',
  DISTRIBUTE_FILL = 'DISTRIBUTE_FILL',
  LINK_OTHER = 'LINK_OTHER'
}
export const enum FillTypeCnEnum {
  SELF_FILL = '自行填报',
  DISTRIBUTE_FILL = '分发填报',
  LINK_OTHER = '关联任务'
}

// 填报任务 -> 归档状态
export enum ArchiveStatusEnum {
  // 未归档
  NOT_ARCHIVE = 'NOT_ARCHIVE',
  // 已归档
  ARCHIVED = 'ARCHIVED'
}
// 填报任务 -> 排放范围
// 排放范围（多个以英文逗号分隔）：SCOPE_ONE - 范围一；SCOPE_TWO - 范围二；SCOPE_THREE - 范围三
export const enum EmissionScopeEnum {
  SCOPE_ONE = 'SCOPE_ONE',
  SCOPE_TWO = 'SCOPE_TWO',
  SCOPE_THREE = 'SCOPE_THREE'
}
export const EmissionScopeOption = [
  {
    label: '范围一',
    value: 'SCOPE_ONE'
  },
  {
    label: '范围二',
    value: 'SCOPE_TWO'
  },
  {
    label: '范围三',
    value: 'SCOPE_THREE'
  }
];

// 填报任务 -> 排放类别
// 排放类别（多个以英文逗号分隔）：DIRECT_EMISSION 组织直接排放 INDIRECT_ENERGY 能源间接排放 INDIRECT_TRANSPORT 运输产生的间接排放 INDIRECT_GOODS_BUY 组织使用产品相关排放 INDIRECT_PRODUCT_USE 与产品相关间接排放 INDIRECT_OTHER 其他间接排放
export const enum EmissionCategoryEnum {
  DIRECT_EMISSION = 'DIRECT_EMISSION',
  INDIRECT_ENERGY = 'INDIRECT_ENERGY',
  INDIRECT_TRANSPORT = 'INDIRECT_TRANSPORT',
  INDIRECT_GOODS_BUY = 'INDIRECT_GOODS_BUY',
  INDIRECT_PRODUCT_USE = 'INDIRECT_PRODUCT_USE',
  INDIRECT_OTHER = 'INDIRECT_OTHER'
}
export const EmissionCategoryOption = [
  {
    label: '组织直接排放',
    value: 'DIRECT_EMISSION'
  },
  {
    label: '能源间接排放',
    value: 'INDIRECT_ENERGY'
  },
  {
    label: '运输产生的间接排放',
    value: 'INDIRECT_TRANSPORT'
  },
  {
    label: '组织使用产品相关排放',
    value: 'INDIRECT_GOODS_BUY'
  },
  {
    label: '与产品相关间接排放',
    value: 'INDIRECT_PRODUCT_USE'
  },
  {
    label: '其他间接排放',
    value: 'INDIRECT_OTHER'
  }
];

// 数据来源
export const DataOriginOptions = [
  {
    label: '表具计量',
    value: 'INSTRUMENT_MEASUREMENT'
  },
  {
    label: '发票凭证',
    value: 'INVOICE_RECEIPT'
  },
  {
    label: '台账记录',
    value: 'STANDING_BOOK_RECORD'
  },
  {
    label: '库房记录',
    value: 'STOREHOUSE_RECORD'
  },
  {
    label: '采购记录',
    value: 'PURCHASE_RECORD'
  }
];
// 数据类型
export const DataAccessMethodOptions = [
  {
    label: '连续测量数据',
    value: 'CONTINUOUS_MEASUREMENT'
  },
  {
    label: '间歇测量数据',
    value: 'DISCONTINUOUS_MEASUREMENT'
  },
  {
    label: '推估数据',
    value: 'ESTIMATE'
  }
];

export const FactorListOptions = [
  {
    label: '国际排放因子',
    value: 'INTERNATIONAL_EF'
  },
  {
    label: '国家排放因子',
    value: 'NATIONAL_EF'
  },
  {
    label: '区域排放因子',
    value: 'REGION_EF'
  },
  {
    label: '物料平衡法所得排放因子',
    value: 'MATERIAL_BALANCE_EF'
  },
  {
    label: '制造商提供的排放因子（自定义）',
    value: 'PRODUCER_EF'
  },
  {
    label: '工艺/设备经验系数所得排放因子（自定义）',
    value: 'TECH_EXP_COEFFICIENT_EF'
  },
  {
    label: '测量法所得排放因子（自定义）',
    value: 'MEASUREMENT_EF'
  }
];
// 盘查范围、排放类型的checkbox group的类型
export interface EmissionScopeCategoryOptionType {
  label: string;
  value: any;
  disabled?: boolean;
}

// 任务类型
export enum TaskTypeEnum {
  // 自建任务
  SELF_CREATE_TASK = 'SELF_CREATE_TASK',
  // 分发任务
  DISTRIBUTE_TASK = 'DISTRIBUTE_TASK'
}

// 责任人设定状态
export enum ResponsibleStatusEnum {
  // 未设定
  NOT_SET = 'NOT_SET',
  // 暂无
  NONE = 'NONE',
  // 已设定
  SET_USER = 'SET_USER'
}

// 任务填报进度
export enum TaskStatusEnums {
  // 未分发
  NOT_ASSIGN = 'NOT_ASSIGN',
  // 未填报 灰色
  NOT_FILL = 'NOT_FILL',
  // 无需填报
  NOT_NEED_FILL = 'NOT_NEED_FILL',
  // 填报中 蓝色
  FILLING = 'FILLING',
  // 已填报 当表达的意思是已填报的时候：蓝色；当表达的意思是待复核的时候：灰色
  FILLED = 'FILLED',
  // 复核通过 绿色
  REVIEW_PASS = 'REVIEW_PASS',
  // 复核驳回 橙色
  REVIEW_REJECT = 'REVIEW_REJECT',
  // 审批通过 绿色
  CHECK_PASS = 'CHECK_PASS',
  // 审批驳回 橙色
  CHECK_REJECT = 'CHECK_REJECT'
}

// 填报审批结果
//审批结果：REVIEW_PASS、CHECK_PASS 通过；REVIEW_REJECT、CHECK_REJECT 驳回
export enum FillCheckResultEnums {
  REVIEW_PASS = 'REVIEW_PASS',
  REVIEW_REJECT = 'REVIEW_REJECT',
  CHECK_PASS = 'CHECK_PASS',
  CHECK_REJECT = 'CHECK_REJECT'
}

// 审批结果弹窗
export enum CheckResultEnum {
  // 审核通过
  CHECK_PASS = 'CHECK_PASS',
  // 审核拒绝
  CHECK_REJECT = 'CHECK_REJECT',
  // 复核通过
  REVIEW_PASS = 'REVIEW_PASS',
  // 复核拒绝
  REVIEW_REJECT = 'REVIEW_REJECT'
}

/**
 * 新因子库
 */
// 因子类型 枚举
export enum factorTypeEnumx {
  MATERIAL = '材料',
  ELECTRICITY = '电力',
  HEAT = '热力',
  COAL = '煤',
  FUEL_OIL = '燃料油',
  FUEL_GAS = '燃料气',
  OTHER = '其他'
}
export const factorTypeOptionx = [
  {
    label: '材料',
    value: 'MATERIAL'
  },
  {
    label: '电力',
    value: 'ELECTRICITY'
  },
  {
    label: '热力',
    value: 'HEAT'
  },
  {
    label: '煤',
    value: 'COAL'
  },
  {
    label: '燃料油',
    value: 'FUEL_OIL'
  },
  {
    label: '燃料气',
    value: 'FUEL_GAS'
  },
  {
    label: '其他',
    value: 'OTHER'
  }
];
export enum sourceTypeEnumx {
  REGION_EF = '区域排放因子',
  NATIONAL_EF = '国家排放因子',
  INTERNATIONAL_EF = '国际排放因子',
  MATERIAL_BALANCE_EF = '物料平衡法所得排放因子'
}
export const sourceTypeOptionx = [
  {
    label: '区域排放因子',
    value: 'REGION_EF'
  },
  {
    label: '国家排放因子',
    value: 'NATIONAL_EF'
  },
  {
    label: '国际排放因子',
    value: 'INTERNATIONAL_EF'
  },
  {
    label: '物料平衡法所得排放因子',
    value: 'MATERIAL_BALANCE_EF'
  }
];

export enum SourceFactorsEnum {
  // 国际排放因子
  INTERNATIONAL_EF = 'INTERNATIONAL_EF',
  // 国家排放因子
  NATIONAL_EF = 'NATIONAL_EF',
  // 区域排放因子
  REGION_EF = 'REGION_EF',
  // 制造商提供的排放因子
  PRODUCER_EF = 'PRODUCER_EF',
  // 工艺/设备经验系数所得排放因子
  TECH_EXP_COEFFICIENT_EF = 'TECH_EXP_COEFFICIENT_EF',
  // 测量/物料平衡法所得排放因子
  MEASUREMENT_EF = 'MEASUREMENT_EF',
  // 物料平衡法所得排放因子
  MATERIAL_BALANCE_EF = 'MATERIAL_BALANCE_EF'
}

export enum SourceFactorsEnumCh {
  // 国际排放因子
  INTERNATIONAL_EF = '国际排放因子',
  // 国家排放因子
  NATIONAL_EF = '国家排放因子',
  // 区域排放因子
  REGION_EF = '区域排放因子',
  // 物料平衡法所得排放因子
  MATERIAL_BALANCE_EF = '物料平衡法所得排放因子',
  // 制造商提供的排放因子
  PRODUCER_EF = '制造商提供的排放因子（自定义）',
  // 工艺/设备经验系数所得排放因子
  TECH_EXP_COEFFICIENT_EF = '工艺/设备经验系数所得排放因子（自定义）',
  // 测量/物料平衡法所得排放因子
  MEASUREMENT_EF = '测量法所得排放因子（自定义）'
}

export enum emissionCategoryEnum {
  DIRECT_EMISSION = '组织直接排放',
  INDIRECT_ENERGY = '能源间接排放',
  INDIRECT_TRANSPORT = '运输产生的间接排放',
  INDIRECT_GOODS_BUY = '组织使用产品相关排放',
  INDIRECT_PRODUCT_USE = '其他间接排放',
  INDIRECT_OTHER = '其他间接排放'
}

export enum emissionScopeEnum {
  SCOPE_ONE = '范围一',
  SCOPE_TWO = '范围二',
  SCOPE_THREE = '范围三'
}

export enum DataAccessMethodEnums {
  CONTINUOUS_MEASUREMENT = 'CONTINUOUS_MEASUREMENT',
  DISCONTINUOUS_MEASUREMENT = 'DISCONTINUOUS_MEASUREMENT',
  ESTIMATE = 'ESTIMATE'
}
//排放源类型
export enum emissionTypeEnum {
  INDUSTRIAL_FURNACE = '工业炉窑',
  EQUIPMENT = '机械设备',
  KINETIC_ENERGY_GENERATING_EQUIPMENT = '动能发生设备',
  ELECTRICAL_EQUIPMENT = '电器设备',
  LIFTING_EQUIPMENT = '起重设备',
  TRANSPORTATION_EQUIPMENT = '运输设备',
  AUXILIARY_PRODUCTION = '辅助生产设备',
  MATERIAL = '材料',
  WASTE = '废弃物',
  OTHER = '其他'
}
export const emissionTypeOption = [
  {
    label: '工业炉窑',
    value: 'INDUSTRIAL_FURNACE'
  },
  {
    label: '机械设备',
    value: 'EQUIPMENT'
  },
  {
    label: '动能发生设备',
    value: 'KINETIC_ENERGY_GENERATING_EQUIPMENT'
  },
  {
    label: '电器设备',
    value: 'ELECTRICAL_EQUIPMENT'
  },
  {
    label: '起重设备',
    value: 'LIFTING_EQUIPMENT'
  },
  {
    label: '运输设备',
    value: 'TRANSPORTATION_EQUIPMENT'
  },
  {
    label: '辅助生产设备',
    value: 'AUXILIARY_PRODUCTION'
  },
  {
    label: '材料',
    value: 'MATERIAL'
  },
  {
    label: '废弃物',
    value: 'WASTE'
  },
  {
    label: '其他',
    value: 'OTHER'
  }
];

//发布板块
export enum moduleTypeEnum {
  SYSTEM_NOTICE = '系统公告',
  HELP_CENTER = '帮助中心'
}
export const moduleTypeOption = [
  {
    label: '系统公告',
    value: 'SYSTEM_NOTICE'
  },
  {
    label: '帮助中心',
    value: 'HELP_CENTER'
  }
];

//发布状态
export enum releaseStatusTypeEnum {
  DRAFT = '草稿',
  PUBLISHED = '已发布'
}
export const releaseStatusTypeOption = [
  {
    label: '草稿',
    value: 'DRAFT'
  },
  {
    label: '已发布',
    value: 'PUBLISHED'
  }
];

//发布范围
export enum releaseRangeTypeEnum {
  ALL = '全部',
  DIRECTIONAL = '定向'
}

//发布时间
export enum releaseTimeTypeEnum {
  IMMEDIATE = '立即发布',
  TIMING = '定时发布'
}

// 盘查周期类型
export enum PeriodTypeEnum {
  // 年度
  YEAR = 'YEAR',
  // 月度
  MONTH = 'MONTH'
}

export enum FILL_STATUS {
  UN_FILL = 'UN_FILL', // 未填报
  IN_FILL = 'IN_FILL', // 填报中
  UN_AUDIT = 'UN_AUDIT', // 待审核
  AUDIT_ACCEPT = 'AUDIT_ACCEPT', // 审核通过
  AUDIT_REJECT = 'AUDIT_REJECT', // 审核驳回
  UN_APPROVAL = 'UN_APPROVAL', // 待审批
  APPROVAL_ACCEPT = 'APPROVAL_ACCEPT', // 审批通过
  APPROVAL_REJECT = 'APPROVAL_REJECT' // 审批驳回
}

export enum FILL_LOG {
  CREATE_TASK = 'CREATE_TASK',
  DATA_FILL = 'DATA_FILL',
  DATA_AUDIT = 'DATA_AUDIT',
  DATA_APPROVAL = 'DATA_APPROVAL'
}

export enum fillStatusTypeEnum {
  UN_FILL = '未填报',
  IN_FILL = '填报中',
  UN_AUDIT = '待审核',
  AUDIT_ACCEPT = '审核通过',
  AUDIT_REJECT = '审核驳回',
  UN_APPROVAL = '待审批',
  APPROVAL_ACCEPT = '审批通过',
  APPROVAL_REJECT = '审批驳回'
}
export const fillStatusTypeOption = [
  {
    label: '未填报',
    value: 'UN_FILL'
  },
  {
    label: '填报中',
    value: 'IN_FILL'
  },
  {
    label: '待审核',
    value: 'UN_AUDIT'
  },
  {
    label: '审核通过',
    value: 'AUDIT_ACCEPT'
  },
  {
    label: '审核驳回',
    value: 'AUDIT_REJECT'
  },
  {
    label: '待审批',
    value: 'UN_APPROVAL'
  },
  {
    label: '审批驳回',
    value: 'APPROVAL_REJECT'
  },
  {
    label: '审批通过',
    value: 'APPROVAL_ACCEPT'
  }
];
export const fillUnFillOption = [
  {
    label: '未填报',
    value: 'UN_FILL'
  },
  {
    label: '填报中',
    value: 'IN_FILL'
  },

  {
    label: '审核驳回',
    value: 'AUDIT_REJECT'
  },

  {
    label: '审批驳回',
    value: 'APPROVAL_REJECT'
  }
];
// 已处理/数据填报
export const fillUnFillDoneOption = [
  {
    label: '待审核',
    value: 'UN_AUDIT'
  },
  {
    label: '审核通过',
    value: 'AUDIT_ACCEPT'
  },
  {
    label: '审批通过',
    value: 'APPROVAL_ACCEPT'
  }
];
// 已处理/数据审核
export const fillAuditDoneOption = [
  {
    label: '审核通过',
    value: 'AUDIT_ACCEPT'
  },
  {
    label: '审批通过',
    value: 'APPROVAL_ACCEPT'
  },
  {
    label: '审核驳回',
    value: 'AUDIT_REJECT'
  },
  {
    label: '审批驳回',
    value: 'APPROVAL_REJECT'
  }
];

// 已处理/数据审批
export const fillApprovalDoneOption = [
  {
    label: '审批通过',
    value: 'APPROVAL_ACCEPT'
  },
  {
    label: '审批驳回',
    value: 'APPROVAL_REJECT'
  },
  {
    label: '待审核',
    value: 'UN_AUDIT'
  }
];
//配置状态
export const configStatusTypeOption = [
  {
    label: '创建中',
    value: 'NEW'
  },
  {
    label: '生效中',
    value: 'ON'
  },
  {
    label: '已终止',
    value: 'OFF'
  }
];
export enum configStatusTypeEnum {
  NEW = 'NEW', // 创建中
  ON = 'ON', // 生效中
  OFF = 'OFF' // 已终止
}

export const emissionFactorOption = [
  {
    label: '国际排放因子',
    value: 'INTERNATIONAL_EF'
  },
  {
    label: '国家排放因子',
    value: 'NATIONAL_EF'
  },
  {
    label: '区域排放因子',
    value: 'REGION_EF'
  },
  {
    label: '物料平衡法所得排放因子',
    value: 'MATERIAL_BALANCE_EF'
  }
];

export const emissionFactorOption2 = [
  {
    label: '碳足迹排放因子',
    value: 'FOOTPRINT_EF'
  },
  {
    label: '手工录入排放因子',
    value: 'MANUALLY_EF'
  }
];

export const matchStatusOption = [
  {
    label: '未匹配',
    value: 'UNMATCHED'
  },
  {
    label: '已匹配',
    value: 'MATCHED'
  }
];
export const calcStatusOption = [
  {
    label: '未归档',
    value: 'UNARCHIVED'
  },
  {
    label: '已归档',
    value: 'ARCHIVED'
  }
];
