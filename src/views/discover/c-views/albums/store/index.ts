import { IRootState } from "@/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllAlbum, getNewestAlbum } from "../service"

interface Ialbum {
  newestAlbums: any[]
  allAlbums: any[]
  total: number
  curCate: string
  curPage: number
}

const initialState: Ialbum = {
  newestAlbums: [],
  allAlbums: [],
  total: 0,
  curCate: "ALL",
  curPage: 1
}

export const getNewestAlbumAction = createAsyncThunk(
  "newsetAlbum",
  (par, { dispatch }) => {
    getNewestAlbum().then((res) => {
      dispatch(changeNewestAlbAction(res.albums))
    })
    getAllAlbum().then((res) => {
      dispatch(changeAllAlbAction(res.albums))
      dispatch(changeTotalAction(res.total))
    })
  }
)

export const getAllAlbumAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("newsetAlbum", (par, { dispatch, getState }) => {
  const nowCate = getState().album.curCate
  //   const nowPage = getState().album.curPage
  dispatch(changeCurPageAction(par))
  getAllAlbum((par - 1) * 35, nowCate).then((res) => {
    dispatch(changeAllAlbAction(res.albums))
    dispatch(changeTotalAction(res.total))
  })
})

export const AlbumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    changeNewestAlbAction(state, { payload }) {
      state.newestAlbums = payload
    },
    changeAllAlbAction(state, { payload }) {
      state.allAlbums = payload
    },
    changeTotalAction(state, { payload }) {
      state.total = payload
    },
    changeCurCateAction(state, { payload }) {
      state.curCate = payload
    },
    changeCurPageAction(state, { payload }) {
      state.curPage = payload
    }
  }
})

export default AlbumSlice.reducer
export const {
  changeNewestAlbAction,
  changeAllAlbAction,
  changeTotalAction,
  changeCurCateAction,
  changeCurPageAction
} = AlbumSlice.actions
