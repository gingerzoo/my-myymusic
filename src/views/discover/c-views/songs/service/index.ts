import { lxRequest1 } from "@/services/index"
import { LargeNumberLike } from "crypto"
// 可选参数必须放在必选参数后
export function getSongCategoryList(offset = 0, cat = "全部", limit = 35) {
  return lxRequest1.request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

export function getSongCategory() {
  return lxRequest1.request({
    url: "/playlist/catlist"
  })
}
