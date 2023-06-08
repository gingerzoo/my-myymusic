import { normalTopList, normalUpdateFreq } from "@/utils/data-handle"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopRank } from "../../recommend/service/recommend"
import { getTopList } from "../service"
import { IRootState } from "@/store"
import { getComments, Iccom } from "@/views/playlist/service"

interface ItopItemType {
  name: string
  id: number
  updateFrequency: string
  coverImgUrl: string
}

interface ItoplistType {
  type: string
  info: ItopItemType[]
}

// interface Icomment {
//   commentsTitle: string
//   comments: any[]
// }
interface Iranking {
  //   curToplistId: number
  curComment: Iccom
  toplist: ItoplistType[]
  updateRreqlist: any[]
  curPlaylistId: number
  curToplist: {
    id: number
    name: string
    coverImgUrl: string
    playCount: number
    subscribedCount: number
    shareCount: number
    commentCount: number
    updateTime: number
    tracks: any[]
  }
}

const initialState: Iranking = {
  //   curToplistId: 19723756,
  curComment: {
    comments: [],
    totalCount: 0
  },
  curPlaylistId: 0,
  toplist: [],
  updateRreqlist: [],
  curToplist: {
    id: 19723756,
    name: "飙升榜",
    coverImgUrl:
      "https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg",
    playCount: 5282725888,
    subscribedCount: 3991592,
    shareCount: 13284,
    commentCount: 215809,
    updateTime: 1669943686048,
    tracks: []
  }
}

export const getTopListAction = createAsyncThunk(
  "toplist",
  async (par, { dispatch, getState }) => {
    const res = await getTopList()
    const myRes = normalTopList(res.list)
    const freqlist = normalUpdateFreq(res.list)
    dispatch(changeTopListAction(myRes))
    dispatch(changeUpdateFreAction(freqlist))
  }
)

export const getCurCommentAction = createAsyncThunk<
  void,
  {
    type: number
    pageNum: number
  },
  { state: IRootState }
>("list-comment", (par, { dispatch, getState }) => {
  const ListId = getState().ranking.curPlaylistId
  console.log("listId", ListId)
  getComments(ListId, par.type, par.pageNum).then((res) => {
    // console.log("origin-comments", res)
    console.log("comments", res.data.comments)
    dispatch(changeCurCommentsAction(res.data))
  })
})

export const getCurTopListAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("curToplist", (id, { dispatch, getState }) => {
  //   const curTopId = getState().ranking.curToplistId
  //获得指定榜单的相关信息
  console.log("chuabru-nowId", id)
  getTopRank(id).then((res) => {
    //烦死了这个更新频率必须要到另一个接口去找
    dispatch(changeCurTopListAction(res.playlist))
    // console.log("res.playlist.id", res.playlist.id)
    dispatch(changeCurPlaylistIdAction(id))
  })

  //顺便更新该歌单的评论！

  getComments(id, 2, 1).then((res) => {
    // console.log("origin-comments", res)
    console.log("comments", res.data.comments)
    dispatch(changeCurCommentsAction(res.data))
  })
})

const RankingSlice = createSlice({
  name: "ranking",
  initialState,
  reducers: {
    // changeCurTopListIdAction(state, { payload }) {
    //   state.curToplistId = payload
    // },
    changeTopListAction(state, { payload }) {
      state.toplist = payload
    },
    changeCurTopListAction(state, { payload }) {
      state.curToplist = payload
    },
    changeUpdateFreAction(state, { payload }) {
      state.updateRreqlist = payload
    },
    changeCurCommentsAction(state, { payload }) {
      state.curComment = payload
    },
    changeCurPlaylistIdAction(state, { payload }) {
      state.curPlaylistId = payload
    }
  }
})

export default RankingSlice.reducer

export const {
  //   changeCurTopListIdAction,
  changeTopListAction,
  changeCurTopListAction,
  changeUpdateFreAction,
  changeCurCommentsAction,
  changeCurPlaylistIdAction
} = RankingSlice.actions
