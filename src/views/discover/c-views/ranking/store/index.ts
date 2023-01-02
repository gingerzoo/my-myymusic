import { normalTopList, normalUpdateFreq } from "@/utils/data-handle"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopRank } from "../../recommend/service/recommend"
import { getListComments, getTopList } from "../service"
import { IRootState } from "@/store"

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

interface Icomment {
  total: number
  comments: any[]
}
interface Iranking {
  //   curToplistId: number
  curComment: Icomment
  toplist: ItoplistType[]
  updateRreqlist: any[]
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
    total: 0,
    comments: []
  },
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
  number,
  { state: IRootState }
>("list-comment", (page, { dispatch, getState }) => {
  const ListId = getState().ranking.curToplist.id
  getListComments(ListId, (page - 1) * 20).then((res) => {
    // console.log(res.comments)
    dispatch(changeCurCommentsAction(res))
  })
})

export const getCurTopListAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("curToplist", (id, { dispatch, getState }) => {
  //   const curTopId = getState().ranking.curToplistId
  //获得指定榜单的相关信息
  getTopRank(id).then((res) => {
    //烦死了这个更新频率必须要到另一个接口去找
    dispatch(changeCurTopListAction(res.playlist))
  })

  //顺便更新该歌单的评论！
  //   getListComments(id).then((res) => {
  //     dispatch(changeCurCommentsAction(res))
  //   })
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
    }
  }
})

export default RankingSlice.reducer

export const {
  //   changeCurTopListIdAction,
  changeTopListAction,
  changeCurTopListAction,
  changeUpdateFreAction,
  changeCurCommentsAction
} = RankingSlice.actions
