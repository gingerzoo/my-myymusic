import { lxRequest1 } from "@/services"
import { type } from "os"

export interface Io {
  userId: number
  nickname: string
  avatarUrl: string
}

interface Icreator extends Io {
  avatarDetail: {
    identityIconUrl: string
  }
}

interface Iar {
  id: number
  name: string
}

interface Ial extends Iar {
  picUrl: string
}

export interface Itrack extends Iar {
  dt: number
  ar: Iar
  al: Ial
}

export type Ioo = {
  id: number
  name: string
  coverImgUrl: string
  tags: string[]
  createTime: number
  userId: number
  description: string
  trackCount: number
  subscribedCount: number
  playCount: number
  subscribers: Io[]
  tracks: Itrack[]
  creator: Icreator
}

interface Ioooo {
  playlist: Ioo
}

export function getPlaylistDet(id: number) {
  return lxRequest1.request<Ioooo>({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

interface Iuser extends Icreator {
  vipRights?: {
    associator: {
      iconUrl: string
    }
    musicPackage: {
      iconUrl: string
    }
  }
}
export type Icom = {
  user: Iuser
  commentId: number
  content: string
  timeStr: string
  likedCount: number
  replyCount: number
}

export type Iccom = {
  comments: Icom[]
  totalCount: number
}

// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台节目
// 5: 视频
// 6: 动态
// 7: 电台
export function getComments(
  id: number,
  type: number,
  pageNo = 1,
  sortType = 2
) {
  return lxRequest1.request({
    url: "/comment/new",
    params: {
      id,
      type,
      pageNo,
      sortType
    }
  })
}
