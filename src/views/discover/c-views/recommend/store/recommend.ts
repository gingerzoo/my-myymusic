import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getRecommData } from "../service/recommend"

interface bannerType {
  banners: any[]
}

const initialState: bannerType = {
  banners: []
}

export const getRecommendAction = createAsyncThunk(
  "bannerdata",
  async (paras, { dispatch }) => {
    const res = await getRecommData()
    // console.log(recommData)
    dispatch(changeBannerData(res.banners))
    //     return (recommData as any).data
  }
)

const recommenSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannerData(state, { payload }) {
      state.banners = payload
    }
  }
})

export default recommenSlice.reducer

export const { changeBannerData } = recommenSlice.actions
