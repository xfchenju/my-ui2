/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-12-02 16:50:45
 * @LastEditors: chenju
 * @LastEditTime: 2023-02-14 15:26:29
 */
import fs from 'fs'
import { resolve } from 'path'
import { compOutput } from '../config'

const delPath = async (path: string) => {
  let files: string[] = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async (file) => {
      let curPath = resolve(path, file)
      if (fs.statSync(curPath).isDirectory()) { // recurse
        await delPath(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    if (path != `${compOutput}`) fs.rmdirSync(path);
  }
};
export default delPath