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

export function getNewAlbum() {
  return lxRequest1.request({
    url: "/album/newest"
  })
}

export function getTopRank(id: number) {
  return lxRequest1.request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getSingerList(limit: number) {
  return lxRequest1.request({
    url: "/artist/list",
    params: {
      limit
    }
  })
}
