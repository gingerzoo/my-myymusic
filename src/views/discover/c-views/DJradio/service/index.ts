import { lxRequest1 } from "@/services"

export function getDjCatelist() {
  return lxRequest1.request({
    url: "/dj/catelist"
  })
}

//按类别的热门推荐
export function getDjRadioHot(cateId: number, offset = 0, limit = 32) {
  return lxRequest1.request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      offset,
      limit
    }
  })
}

//按类别的优秀新电台
export function getDjCateRecommend(type: number) {
  return lxRequest1.request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

// /dj/program/toplist
//节目排行榜
export function getDjranking(offset = 0, limit = 10) {
  return lxRequest1.request({
    url: "/dj/program/toplist",
    params: {
      offset,
      limit
    }
  })
}

//推荐节目
export function getDjRecommend() {
  return lxRequest1.request({
    url: "/program/recommend"
  })
}
