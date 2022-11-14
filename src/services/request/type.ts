import type { AxiosRequestConfig, AxiosResponse } from "axios"
// export interface AxiosResponse<T = any, D = any>  {
//     data: T;
//     status: number;
//     statusText: string;
//     headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//     config: AxiosRequestConfig<D>;
//     request?: any;
//   }

// 针对AxiosRequestConfig进行扩展（主要是让拦截器功能变得可选）

export default interface LXRequsetConfig extends AxiosRequestConfig {
  interceptors?: {
    reqSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig
    reqFailedFn?: (err: any) => any
    resSuccessFn: (res: AxiosResponse) => AxiosResponse
    resFailedFn?: (err: any) => any
  }
}
