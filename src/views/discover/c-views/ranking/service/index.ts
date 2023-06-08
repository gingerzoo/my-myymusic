import { lxRequest1 } from "@/services/index"

export function getTopList() {
  return lxRequest1.request({
    url: "/toplist"
  })
}

export function getListComments(type = 2, id: number, pageNo = 0) {
  return lxRequest1.request({
    url: "/comment/new",
    params: {
      type,
      id,
      pageNo
    }
  })
}
