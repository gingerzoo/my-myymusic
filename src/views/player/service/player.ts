import { lxRequest1 } from "@/services/index"

export function getSongDetail(ids: number) {
  return lxRequest1.request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return lxRequest1.request({
    url: "/lyric",
    params: {
      id
    }
  })
}
