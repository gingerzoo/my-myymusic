import { lxRequest1 } from "@/services"

export function getArtistList(
  type = -1,
  area = -1,
  initial = -1,
  limit = 100,
  offset = 0
) {
  return lxRequest1.request({
    url: "/artist/list",
    params: {
      type,
      area,
      initial,
      limit,
      offset
    }
  })
}

//热门歌手
export function getTopArtist(limit = 100, offset = 0) {
  return lxRequest1.request({
    url: "/top/artists",
    params: {
      limit,
      offset
    }
  })
}
