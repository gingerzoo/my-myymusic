import axios from "axios"
import type { AxiosInstance, AxiosResponse } from "axios"
import type LXRequsetConfig from "./type"

// export interface AxiosResponse<T = any, D = any>  {
//     data: T;
//     status: number;
//     statusText: string;
//     headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//     config: AxiosRequestConfig<D>;
//     request?: any;
//   }

class LXrequset {
  instance: AxiosInstance
  constructor(config: LXRequsetConfig) {
    this.instance = axios.create(config)

    //全局请求拦截器
    /*     this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log("全局请求拦截失败")
        return err
      }
    ) */

    //全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    // 针对特定的lxRequest实例添加拦截器
    // 类型缩小
    /* if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.reqSuccessFn,
        config.interceptors.reqFailedFn
      )

      this.instance.interceptors.response.use(
        config.interceptors.resSuccessFn,
        config.interceptors.resFailedFn
      )
    } */

    // 通过可选链进行类型缩小
    this.instance.interceptors.request.use(
      config.interceptors?.reqSuccessFn,
      config.interceptors?.reqFailedFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.resSuccessFn,
      config.interceptors?.resFailedFn
    )
  }

  //封装网络请求 这里的config是发送网络请求时传入的，和constructor里那个config不一样!!!!!!!!
  //这里将config的类型设为 LXRequsetConfig意味着即使是同一个实例，也可以根据需要选择是否传入拦截器
  //注意这里不能直接在实例上加入拦截器，因为一些请求共享的是同一个实例，一旦加入那么这个方法会永远保留下来，因此需要我们自己手动调用，而不是交给axios处理

  //   第一个T：函数泛型  外界传入的希望的res类型  不传的话就是any类型
  request<T = any>(config: LXRequsetConfig<T>) {
    //单次请求的成功处理
    if (config.interceptors?.reqSuccessFn) {
      config = config.interceptors.reqSuccessFn(config)
    }

    //好难啊！！！  this.instance.request(config)本来就返回一个promise
    //这里原来是 return  this.instance.request(config)
    //还有一个注意的点，如果promise后不指定一个泛型，得到的结果res的类型为unknown,将很难进行后续操作

    //   第二个T：泛型类
    /*    new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => Promise<T> */
    return new Promise<T>((resolve, reject) => {
      /*    request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>; */
      //很好，下面这一坨泛型不太看得懂
      this.instance

        //   第三个T代表request函数返回的promise中res的类型
        .request<any, T>(config)
        .then((res) => {
          //单次响应的失败处理
          if (config.interceptors?.resSuccessFn) {
            res = config.interceptors.resSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default LXrequset
