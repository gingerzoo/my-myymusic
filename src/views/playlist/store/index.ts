import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getComments, getPlaylistDet, Icom, Ioo } from "../service"

interface Iplaylist {
  playlist: Ioo
  comments: Icom[]
  totalComments: number
}

const initialState: Iplaylist = {
  playlist: {
    id: 0,
    name: "",
    coverImgUrl: "",
    tags: [],
    createTime: 0,
    userId: 0,
    description: "",
    trackCount: 0,
    subscribedCount: 0,
    playCount: 0,
    subscribers: [],
    tracks: [],
    creator: {
      userId: 0,
      nickname: "",
      avatarUrl: "",
      avatarDetail: {
        identityIconUrl: ""
      }
    }
  },
  comments: [],
  totalComments: 0
}

export const getPlaylistDetAction = createAsyncThunk(
  "playlist-detail",
  async (par: number, { dispatch, getState }) => {
    const cur = await getPlaylistDet(par)
    dispatch(changePlaylistDetAction(cur.playlist))
    const curComments = await getComments(par, 2)
    dispatch(changePlaylistComAction(curComments.comments))
    dispatch(changeTotalCommentsAction(curComments.totalCount))
  }
)

const playlistSlice = createSlice({
  name: "PlaylistReducer",
  initialState,
  reducers: {
    changePlaylistDetAction(state, { payload }) {
      state.playlist = payload
    },
    changePlaylistComAction(state, { payload }) {
      state.comments = payload
    },
    changeTotalCommentsAction(state, { payload }) {
      state.totalComments = payload
    }
  }
})

export default playlistSlice.reducer

export const {
  changePlaylistDetAction,
  changePlaylistComAction,
  changeTotalCommentsAction
} = playlistSlice.actions
