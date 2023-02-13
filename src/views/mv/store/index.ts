import { IRootState } from "@/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMv, getMvDetail } from "../service"

interface Imv {
  id: number
  url: string
  detail: {
    name: string
    artistName: string
    artistId: number
    subCount: number
    shareCount: number
    commentCount: number
  }
}
const initialState = {
  id: 0,
  url: "",
  detail: {
    name: "",
    artistName: "",
    artistId: 0,
    subCount: 0,
    shareCount: 0,
    commentCount: 0
  }
}

export const getMvDetailAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("mvDetail", (par, { dispatch, getState }) => {
  dispatch(changeMvId(par))
  getMv(par).then((res) => {
    dispatch(changeMvUrlAction(res.data.url))
  })
  getMvDetail(par).then((res) => {
    dispatch(changeMvDetailAction(res.data))
  })
})
export const MvSlice = createSlice({
  name: "mv",
  initialState,
  reducers: {
    changeMvId(state, { payload }) {
      state.id = payload
    },
    changeMvUrlAction(state, { payload }) {
      state.url = payload
    },
    changeMvDetailAction(state, { payload }) {
      state.detail = payload
    }
  }
})

export const { changeMvId, changeMvUrlAction, changeMvDetailAction } =
  MvSlice.actions

export default MvSlice.reducer
