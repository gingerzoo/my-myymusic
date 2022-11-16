import { lxRequest1 } from "@/services/index"

export function getSliderData() {
  return lxRequest1.request({
    url: "/banner"
  })
}

export function getHotRecommend(limit = 20) {
  return lxRequest1.request({
    url: "/personalized",
    params: {
      limit
    }
  })
}
