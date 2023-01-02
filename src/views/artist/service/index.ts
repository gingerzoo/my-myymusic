import { lxRequest1 } from "@/services"

export function getArtistDetail(id: number) {
  return lxRequest1.request({
    url: "/artist/detail",
    params: {
      id
    }
  })
}

export function getArtistTopSong(id: number) {
  return lxRequest1.request({
    url: "/artist/top/song",
    params: {
      id
    }
  })
}

export function getArtistMV(id: number, limit = 12, offset = 0) {
  return lxRequest1.request({
    url: "/artist/mv",
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getArtistAlbum(id: number, limit = 12, offset = 0) {
  return lxRequest1.request({
    url: "/artist/album",
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getArtistDesc(id: number) {
  return lxRequest1.request({
    url: "/artist/desc",
    params: {
      id
    }
  })
}
