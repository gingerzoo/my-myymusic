const path = require("path")
const CracoLessPlugin = require("craco-less")

//path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
// 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
