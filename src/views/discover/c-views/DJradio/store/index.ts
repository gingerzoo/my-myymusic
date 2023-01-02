import { IRootState } from "@/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getDjCatelist,
  getDjCateRecommend,
  getDjRadioHot,
  getDjranking,
  getDjRecommend
} from "../service"

interface Iradio {
  categories: any[]
  cateRecom: any[]
  cateHot: any[]
  djRecom: any[]
  djRanking: any[]
  curCate: number
  hotCount: number
  homeCate: any[]
}
const initialState: Iradio = {
  categories: [],
  cateRecom: [],
  cateHot: [],
  djRecom: [],
  djRanking: [],
  curCate: 0,
  hotCount: 0,
  homeCate: []
}

export const getDjCatelistAction = createAsyncThunk(
  "categories",
  (par, { dispatch, getState }) => {
    getDjCatelist().then((res) => {
      dispatch(changeDjCateAction(res.categories))
    })
    getDjRecommend().then((res) => {
      dispatch(changeDjRecomAction(res.programs))
    })
    getDjranking().then((res) => {
      dispatch(changeDjRankingAction(res.toplist))
    })
  }
)

export const getDjCateRecomAction = createAsyncThunk<
  void,
  void,
  {
    state: IRootState
  }
>("perfect", (par, { dispatch, getState }) => {
  const nowCate = getState().djRadio.curCate
  getDjCateRecommend(nowCate).then((res) => {
    dispatch(changeCateRecomAction(res.djRadios))
  })
  getDjRadioHot(nowCate).then((res) => {
    dispatch(changeCateHotAction(res.djRadios))
    dispatch(changeHotCountAction(res.count))
  })
})

export const getDjCateHotAction = createAsyncThunk<
  void,
  number,
  {
    state: IRootState
  }
>("perfect", (par, { dispatch, getState }) => {
  const nowCate = getState().djRadio.curCate
  getDjRadioHot(nowCate, (par - 1) * 32).then((res) => {
    dispatch(changeCateHotAction(res.djRadios))
  })
})

export const getHomeDjCateRecomAction = createAsyncThunk<
  void,
  void,
  { state: IRootState }
>("nana", (par, { dispatch, getState }) => {
  const cate = [2, 6, 3, 2001, 11]
  let nowRecom = getState().djRadio.homeCate
  for (const i of cate) {
    getDjCateRecommend(i).then((res) => {
      nowRecom = [...nowRecom, res.djRadios.slice(0, 4)]
      dispatch(changeHomeDjCateRecomAction(nowRecom))
    })
  }
})

export const DjRadioSlice = createSlice({
  name: "djradio",
  initialState,
  reducers: {
    changeDjCateAction(state, { payload }) {
      state.categories = payload
    },
    changeCateRecomAction(state, { payload }) {
      state.cateRecom = payload
    },
    changeCurCateAction(state, { payload }) {
      state.curCate = payload
    },
    changeCateHotAction(state, { payload }) {
      state.cateHot = payload
    },
    changeHotCountAction(state, { payload }) {
      state.hotCount = payload
    },
    changeDjRecomAction(state, { payload }) {
      state.djRecom = payload
    },
    changeDjRankingAction(state, { payload }) {
      state.djRanking = payload
    },
    changeHomeDjCateRecomAction(state, { payload }) {
      state.homeCate = payload
    }
  }
})

export default DjRadioSlice.reducer
export const {
  changeDjCateAction,
  changeCateRecomAction,
  changeCurCateAction,
  changeCateHotAction,
  changeHotCountAction,
  changeDjRecomAction,
  changeDjRankingAction,
  changeHomeDjCateRecomAction
} = DjRadioSlice.actions
