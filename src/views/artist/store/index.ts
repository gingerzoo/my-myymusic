import { IRootState } from "@/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getArtistAlbum,
  getArtistDesc,
  getArtistDetail,
  getArtistMV,
  getArtistTopSong
} from "../service"

interface Iintro {
  ti: string
  txt: string
}

interface IartistType {
  artistId: number
  //   userId: number
  info: {
    name: string
    alias: string[]
    picUrl: string
  }
  topList: any[]
  describe: {
    introduction: Iintro[]
    briefDesc: string
  }
  mvs: any[]
  albums: any[]
  detail: {
    user: any
    artist: {
      albumSize: number
      musicSize: number
      mvSize: number
    }
  }
}
const initialState: IartistType = {
  artistId: 31376161,
  info: {
    name: "G.E.M.邓紫棋",
    alias: ["G.E.M."],
    picUrl:
      "https://p2.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg"
  },
  topList: [],
  describe: {
    introduction: [],
    briefDesc: ""
  },
  mvs: [],
  albums: [],
  detail: {
    user: {},
    artist: {
      albumSize: 41,
      musicSize: 212,
      mvSize: 40
    }
  }
}

//获得歌手的基本信息(主要是那个图)和top song
export const getArtistEveAction = createAsyncThunk<
  void,
  void,
  { state: IRootState }
>("artist", (par, { dispatch, getState }) => {
  const nowId = getState().artist.artistId
  getArtistDetail(nowId).then((res) => {
    dispatch(changeArtistDetailAction(res.data))
  })
  getArtistAlbum(nowId).then((res) => {
    dispatch(changeArtistInfoAction(res.artist))
    dispatch(changeArtistAlbumAction(res.hotAlbums))
  })
  getArtistTopSong(nowId).then((res) => {
    dispatch(changeArtistTopListAction(res.songs))
  })
})

// 获得歌手的专辑信息
export const getArtistAlbumAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("artist", (par, { dispatch, getState }) => {
  const nowId = getState().artist.artistId
  getArtistAlbum(nowId, 12, (par - 1) * 12).then((res) => {
    dispatch(changeArtistAlbumAction(res.hotAlbums))
  })
})

//获得歌手的mv信息
export const getArtistMvAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("artist", (par, { dispatch, getState }) => {
  const nowId = getState().artist.artistId
  getArtistMV(nowId, 12, (par - 1) * 12).then((res) => {
    dispatch(changeArtistMvsAction(res.mvs))
  })
})

//获得歌手的描述信息
export const getArtistDescAction = createAsyncThunk<
  void,
  void,
  { state: IRootState }
>("artist", (par, { dispatch, getState }) => {
  const nowId = getState().artist.artistId
  getArtistDesc(nowId).then((res) => {
    dispatch(changeArtistDescAction(res))
  })
})

export const ArtistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    changeArtistIdAction(state, { payload }) {
      state.artistId = payload
    },
    changeArtistTopListAction(state, { payload }) {
      state.topList = payload
    },
    changeArtistDescAction(state, { payload }) {
      state.describe = payload
    },
    changeArtistMvsAction(state, { payload }) {
      state.mvs = payload
    },
    changeArtistAlbumAction(state, { payload }) {
      state.albums = payload
    },
    changeArtistDetailAction(state, { payload }) {
      state.detail = payload
    },
    changeArtistInfoAction(state, { payload }) {
      state.info = payload
    }
  }
})

export default ArtistSlice.reducer
export const {
  changeArtistIdAction,
  changeArtistTopListAction,
  changeArtistDescAction,
  changeArtistMvsAction,
  changeArtistAlbumAction,
  changeArtistDetailAction,
  changeArtistInfoAction
} = ArtistSlice.actions
