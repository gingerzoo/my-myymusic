import { lxRequest1 } from "@/services/index"

export function getTopList() {
  return lxRequest1.request({
    url: "/toplist"
  })
}

export function getListComments(id: number, offset = 0) {
  return lxRequest1.request({
    url: "/comment/playlist",
    params: {
      id,
      offset
    }
  })
}
