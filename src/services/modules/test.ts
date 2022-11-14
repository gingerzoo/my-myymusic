import { lxRequest1 } from ".."
lxRequest1
  .request({
    url: "/home/multidata"
  })
  .then((res) => {
    console.log(res)
  })

// lxRequest2
//   .request({
//     url: "/entire/list",
//     //这里的params参数携带的是query查询
//     params: {
//       offset: 0,
//       size: 20
//     }
//   })
//   .then((res) => {
//     console.log(res?.data)
//   })

// interface IHomeData {
//   data: any
//   returnCode: string
//   success: boolean
// }

// lxRequest2.request<IHomeData>({
//   url: "/home/highscore",
//   interceptors: {
//     reqSuccessFn: (config) => {
//       console.log("/home/highscore请求成功的拦截")
//       return config
//     },

//     resSuccessFn: (res) => {
//       console.log("/home/highscore响应成功的拦截")
//       return res
//     }
//   }
// })
