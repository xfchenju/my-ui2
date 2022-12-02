/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-12-02 16:50:45
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 16:51:28
 */
import fs from 'fs'
import { resolve } from 'path'
import { componentPath } from './paths'
const stayFile = ['package.json', 'README.md']

const delPath = async (path: string) => {
  let files: string[] = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async (file) => {
      let curPath = resolve(path, file)
      if (fs.statSync(curPath).isDirectory()) { // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else { // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });
    if (path != `${componentPath}/kitty-ui`) fs.rmdirSync(path);
  }
};
export default delPath