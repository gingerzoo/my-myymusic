import { lxRequest1 } from "@/services"

export function getMvDetail(mvid: number) {
  return lxRequest1.request({
    url: "/mv/detail",
    params: {
      mvid
    }
  })
}

export function getMv(id: number, r = 1080) {
  return lxRequest1.request({
    url: "/mv/url",
    params: {
      id,
      r
    }
  })
}
