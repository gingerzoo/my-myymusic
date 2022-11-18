import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getSliderData,
  getHotRecommend,
  getNewAlbum,
  getTopRank,
  getSingerList
} from "../service/recommend"

interface bannerType {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  topRank: any[]
  settleSinger: any[]
}

const initialState: bannerType = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  topRank: [],
  settleSinger: []
}

// 轮播图部分的网络请求
/*
export const getBannerAction = createAsyncThunk(
  "bannerdata",
  async (paras, { dispatch }) => {
    const res = await getSliderData()
    dispatch(changeBannerData(res.banners))
  }
)
 */

//热门推荐模块的数据
/*
export const getHotRecommendAction = createAsyncThunk(
  "hotRecommenddata",
  async (paras, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecData(res.result))
  }
)
*/

//新碟上架模块数据
/*
export const getNewAlbumAction = createAsyncThunk(
  "newAlbumdata",
  async (paras, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbData(res.albums))
  }
)
*/

//入驻歌手模块数据
/*
export const getSetSingerAction = createAsyncThunk(
  "newAlbumdata",
  async (paras, { dispatch }) => {
    const res = await getSingerList(5)
    dispatch(changeSettleSinger(res.artists))
  }
)
*/

//榜单模块数据
//好难啊！！！！！！！！！！
const rankingIds = [19723756, 3779629, 2884035]
export const getTopRankAction = createAsyncThunk(
  "topRanking",
  (paras, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const rankingId of rankingIds) {
      promises.push(getTopRank(rankingId))
    }
    Promise.all(promises).then((res) => {
      const playlist = res.map((item) => item.playlist)
      dispatch(changeTopRankData(playlist))
    })
  }
)

//将recommend页面的网络请求整合到一起(如果在dispatch时没有传入参数可以这样做，显得简洁一些)
export const getRecommendAction = createAsyncThunk(
  "Recommenddata",
  (paras, { dispatch }) => {
    getSliderData().then((res) => dispatch(changeBannerData(res.banners)))
    getHotRecommend(8).then((res) => dispatch(changeHotRecData(res.result)))

    getSingerList(5).then((res) => dispatch(changeSettleSinger(res.artists)))
    getNewAlbum().then((res) => dispatch(changeNewAlbData(res.albums)))
  }
)

export const recommenSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannerData(state, { payload }) {
      state.banners = payload
    },
    changeHotRecData(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbData(state, { payload }) {
      state.newAlbum = payload
    },
    changeTopRankData(state, { payload }) {
      state.topRank = payload
    },
    changeSettleSinger(state, { payload }) {
      state.settleSinger = payload
    }
  }
})

export default recommenSlice.reducer

export const {
  changeBannerData,
  changeHotRecData,
  changeNewAlbData,
  changeTopRankData,
  changeSettleSinger
} = recommenSlice.actions
