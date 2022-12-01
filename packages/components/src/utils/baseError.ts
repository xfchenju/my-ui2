/*
 * @Description: 基础组件异常抛出
 * @Author: chenju
 * @Date: 2022-03-21 11:33:38
 * @LastEditors: chenju
 * @LastEditTime: 2022-03-21 11:33:38
 */
class BaseComponentError extends Error {
  constructor(m: string) {
    super(m);
    this.name = 'BaseComponentError';
  }
}

export function throwError(scope: string, m: string): never {
  throw new BaseComponentError(`[${scope}] ${m}`);
}

export function debugWarn(scope: string, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(new BaseComponentError(`[${scope}] ${message}`));
  }
}
