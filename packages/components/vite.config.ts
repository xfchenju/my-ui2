/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 16:10:06
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-05 14:10:43
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import { PKG_NAME } from './script/config'

export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: "es",
      //压缩
      minify: false,
      //css分离
      //cssCodeSplit: true,
      rollupOptions: {
        //忽略打包vue文件
        external: ['vue', 'element-plus', 'lodash'],
        input: ['src/index.ts'],
        output: [
          {
            format: 'es',
            //不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: resolve(__dirname, `./${PKG_NAME}/es`),
            preserveModulesRoot: PKG_NAME
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: resolve(__dirname, `./${PKG_NAME}/lib`),
            preserveModulesRoot: PKG_NAME
          }
        ]
      },
      lib: {
        entry: './index.ts',
        formats: ['es', 'cjs']
      }
    },
    plugins: [
      vue(),
      dts({
        outputDir: resolve(__dirname, `./${PKG_NAME}/es/src`),
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: '../../tsconfig.json'
      }),
      //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
      dts({
        outputDir: resolve(__dirname, `./${PKG_NAME}/lib/src`),
        tsConfigFilePath: '../../tsconfig.json'
      }),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // {
      //   name: 'style',
      //   generateBundle(config, bundle) {
      //     //这里可以获取打包后的文件目录以及代码code
      //     const keys = Object.keys(bundle)
      //     for (const key of keys) {
      //       const bundler: any = bundle[key as any]
      //       this.emitFile({
      //         type: 'asset',
      //         fileName: key,//文件名名不变
      //         source: bundler.code.replace(/\.scss/g, '.css')
      //       })
      //     }
      //   }
      // }
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
)