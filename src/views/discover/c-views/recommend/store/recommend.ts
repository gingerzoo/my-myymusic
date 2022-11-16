import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getSliderData, getHotRecommend } from "../service/recommend"

interface bannerType {
  banners: any[]
  hotRecommend: any[]
}

const initialState: bannerType = {
  banners: [],
  hotRecommend: []
}

// 轮播图部分的网络请求
export const getBannerAction = createAsyncThunk(
  "bannerdata",
  async (paras, { dispatch }) => {
    const res = await getSliderData()
    // console.log(recommData)
    dispatch(changeBannerData(res.banners))
    //     return (recommData as any).data
  }
)

//热门推荐模块的数据
export const getHotRecommendAction = createAsyncThunk(
  "hotRecommenddata",
  async (paras, { dispatch }) => {
    const res = await getHotRecommend(8)

    dispatch(changeHotRecData(res.result))
    //     return (recommData as any).data
  }
)

const recommenSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannerData(state, { payload }) {
      state.banners = payload
    },
    changeHotRecData(state, { payload }) {
      state.hotRecommend = payload
    }
  }
})

export default recommenSlice.reducer

export const { changeBannerData, changeHotRecData } = recommenSlice.actions
