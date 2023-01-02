import { lxRequest1 } from "@/services"

export function getNewestAlbum() {
  return lxRequest1.request({
    url: "/album/newest"
  })
}

export function getAllAlbum(offset = 0, area = "ALL", limit = 35) {
  return lxRequest1.request({
    url: "/album/new",
    params: {
      limit,
      offset,
      area
    }
  })
}
