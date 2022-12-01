import cpy from 'cpy'
import { resolve } from 'path'
import { promises as fs } from "fs"
import sass from "sass"
import glob from "fast-glob"
const sourceDir = resolve(__dirname, '../src')
//lib文件目录
const targetLib = resolve(__dirname, '../lib')
//es文件目录
const targetEs = resolve(__dirname, '../es')
//src目录
const srcDir = resolve(__dirname, '../src')

const buildSass = async () => {
    //直接将less文件复制到打包后目录
    await cpy(`${sourceDir}/**/*.scss`, targetLib)
    await cpy(`${sourceDir}/**/*.scss`, targetEs)
    //获取打包后.less文件目录(lib和es一样)
    const scssFile = await glob("**/*.scss", { cwd: srcDir, onlyFiles: true })
    //遍历含有less的目录
    for (let path in scssFile) {
        console.log('path', scssFile[path])
        // scss文件路径
        const filePath = `${srcDir}/${scssFile[path]}`
        // 将scss文件转为css（sass自带功能）
        let code = await sass.compileAsync(filePath)
        //拿到.css后缀path
        const cssPath = scssFile[path].replace('.scss', '.css')
        //将css写入对应目录
        await fs.writeFile(resolve(targetLib, cssPath), code?.css)
        await fs.writeFile(resolve(targetEs, cssPath), code?.css)
    }
}

buildSass()