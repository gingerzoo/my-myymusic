export const BASE_URL = "http://codercba.com:9002"

export const TIMEOUT = 100000

/* 如何区分开发环境和生产环境

1.手动切换
2.依赖于当前环境：development/production process.env.NODE_ENV
let BAEE_URL=""
if(process.env.NODE_ENV==="development"){
    BAEE_URL=http://codercba.dev:9002
}else{
    BAEE_URL=http://codercba.prod:9002
}
3.将所有配置文件放在.env.development和.env.production中
从定义的环境变量的配置文件中加载变量
process.env.REACT_APP_BASE_URL
 */

console.log(process.env)
