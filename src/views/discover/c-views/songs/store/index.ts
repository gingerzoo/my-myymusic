import { IRootState } from "@/store"
import { normalCategory } from "@/utils/data-handle"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSongCategory, getSongCategoryList } from "../service"
interface IsongType {
  playlist: any[]
  currentPage: number
  total: number
  category: any[]
  curCategory: string
}

const initialState: IsongType = {
  playlist: [],
  currentPage: 1,
  total: 0,
  category: [],
  curCategory: "全部"
}

// < void,number, { state: IsongType }>
export const getSongCateListAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("songsong", (par, { dispatch, getState }) => {
  const nowCategory = getState().songCatList.curCategory
  if (nowCategory) {
    getSongCategoryList((par - 1) * 35, nowCategory)
      .then((res) => {
        dispatch(changeCurPageAction(par))
        dispatch(changeSongListAction(res.playlists))
        dispatch(changeToatlAction(res.total))
      })
      .catch((err) => console.log("获取歌单数据错误", err))
  }
})

export const getCategoryAction = createAsyncThunk(
  "category",
  (par, { dispatch, getState }) => {
    getSongCategory()
      .then((res) => {
        //将得到的分类数据进行整理
        const category = normalCategory(res)
        //将整理好的数据保存在redux中
        console.log(category)
        dispatch(changeCategoryAction(category))
      })
      .catch((err) => console.log("获取歌单数据错误", err))
  }
)

const SongsSlice = createSlice({
  name: "songList",
  initialState,
  reducers: {
    changeSongListAction(state, { payload }) {
      state.playlist = payload
    },
    changeCurPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeToatlAction(state, { payload }) {
      state.total = payload
    },
    changeCategoryAction(state, { payload }) {
      state.category = payload
    },
    changeCurCateAction(state, { payload }) {
      state.curCategory = payload
    }
  }
})
export default SongsSlice.reducer
export const {
  changeSongListAction,
  changeCurPageAction,
  changeToatlAction,
  changeCategoryAction,
  changeCurCateAction
} = SongsSlice.actions
