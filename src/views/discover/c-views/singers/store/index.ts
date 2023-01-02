import { IRootState } from "@/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getArtistList, getTopArtist } from "../service"

interface IsingerType {
  singerList: any[]
  curArea: {
    name: string
    index: number
  }
  /*  {
    name: string
    index: number
  } */
  curType: {
    name: string
    index: number
  }
  alph: any
}
const initialState: IsingerType = {
  singerList: [],
  alph: -1,
  curArea: {
    name: "全部",
    index: -1
  },

  curType: {
    name: "全部",
    index: -1
  }
}

interface IsingerPar {
  type: number
  area: number
}

export const getSingerListAction = createAsyncThunk<
  void,
  void,
  { state: IRootState }
>("singerlist", async (par, { dispatch, getState }) => {
  const nowArea = getState().singerCatList.curArea.index
  const nowType = getState().singerCatList.curType.index
  const alph = getState().singerCatList.alph
  let res
  if (nowArea != -1 && nowType != -1) {
    res = await getArtistList(nowType, nowArea, alph)
  } else {
    res = await getTopArtist()
  }

  dispatch(changeSingerListAction(res.artists))
})

export const SingerSlice = createSlice({
  name: "singers",
  initialState,
  reducers: {
    changeSingerListAction(state, { payload }) {
      state.singerList = payload
    },
    changeCurAreaAction(state, { payload }) {
      state.curArea = payload
    },
    changeCurTypeAction(state, { payload }) {
      state.curType = payload
    },
    changeCurAlphAction(state, { payload }) {
      state.alph = payload
    }
  }
})

export default SingerSlice.reducer
export const {
  changeSingerListAction,
  changeCurAreaAction,
  changeCurTypeAction,
  changeCurAlphAction
} = SingerSlice.actions
