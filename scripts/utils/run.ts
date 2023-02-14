/*
 * @Description: 命令行操作
 * @Author: chenju
 * @Date: 2022-12-02 16:49:40
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 16:50:05
 */
import { spawn } from 'child_process'

export const run = async (command: string, path: string) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ')
  return new Promise((resolve, reject) => {
      const app = spawn(cmd, args, {
          cwd: path,//执行命令的路径
          stdio: 'inherit', //输出共享给父进程
          shell: true
      })
      //执行完毕关闭并resolve
      app.on('close', resolve)
  })
}