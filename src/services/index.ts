import { BASE_URL, TIMEOUT } from "./config"
import LXrequset from "./request"

export const lxRequest1 = new LXrequset({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// export const lxRequest2 = new LXrequset({
//   baseURL: "http://codercba.com:1888/airbnb/api",
//   timeout: TIMEOUT,
//   interceptors: {
//     reqSuccessFn: (config) => {
//       console.log("爱彼迎请求成功的拦截")
//       return config
//     },
//     reqFailedFn(err) {
//       console.log("爱彼迎请求失败的拦截", err)
//     },
//     resSuccessFn: (res) => {
//       console.log("爱彼迎响应成功的拦截")
//       return res.data
//     },
//     resFailedFn(err) {
//       console.log("爱彼迎响应失败的拦截", err)
//     }
//   }
// })
