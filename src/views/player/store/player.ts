import { IRootState } from "@/store"
import { Ilyric, parseLyric } from "@/utils/parse-lyric"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getSongDetail, getSongLyric } from "../service/player"

interface IPlayerState {
  //当前播放歌曲
  currentSong: any
  //当前播放歌曲的全部歌词
  lyrics: Ilyric[]
  //当前播放进度的歌词
  lyricIndex: number
  //播放歌单
  playSongList: any[]
  //歌单中每首歌对应的索引
  playSongIndex: number
  //歌曲模式
  playMode: number
  //是否展示歌词版
  showList: boolean
}

/* 切歌时的处理函数 */
/* 这里的泛型经常用到！！！！！！！！！！！！！！！！！！！！！ */
export const changeMusicAction = createAsyncThunk<
  void,
  boolean,
  { state: IRootState }
>("changeSong", (isNext, { dispatch, getState }) => {
  const songList = getState().player.playSongList
  const songIndex = getState().player.playSongIndex
  const playMode = getState().player.playMode
  console.log("nowIndex", songIndex)
  let nowIndex
  let nowSong = songList[songIndex]
  //处理顺序播放和单曲循环播放
  if (playMode != 1) {
    nowIndex = isNext ? songIndex + 1 : songIndex - 1
    //边界条件 当播放的歌曲为第一首或者最后一首时需要特殊处理
    if (nowIndex > songList.length - 1) nowIndex = 0
    if (nowIndex < 0) nowIndex = songList.length - 1
  } //处理随机播放
  else {
    nowIndex = Math.floor(Math.random() * songList.length)
  }
  //获取当前歌曲
  nowSong = songList[nowIndex]
  //发送歌曲和index的action
  dispatch(changeCurSongAction(nowSong))
  dispatch(changeListIndexAction(nowIndex))

  //获取对应歌词
  //获取歌词信息
  getSongLyric(nowSong.id).then((res) => {
    //拿到歌词对象
    const lyricString = res.lrc.lyric
    // //歌词解析-歌词的格式化（将每一句歌词的字符串解析成一个个对象）
    const lyrics = parseLyric(lyricString)
    dispatch(changeLyricAction(lyrics))
  })
})

/* 获取歌曲相关信息 */
export const getSongDetAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>("songDetail", (ids: number, { dispatch, getState }) => {
  /*
    准备播放某一首歌曲时，要分成两种情况
*/
  const playSongList = getState().player.playSongList
  //用传入的ids匹配歌单中每一首歌的id
  const songIndex = playSongList.findIndex((item) => item.id === ids)
  /*  情况1.从播放列表尝试获得这首歌（播放列表已经存在这首歌）songIndex=-1表明没有匹配上，需要发送网络请求 */
  if (songIndex == -1) {
    //获取歌曲信息
    getSongDetail(ids).then((res) => {
      if (!res.songs.length) return
      //将newSong放到列表中
      const newList = [...playSongList]
      newList.push(res.songs[0])
      dispatch(changePlayListAction(newList))
      dispatch(changeCurSongAction(res.songs[0]))
      dispatch(changeListIndexAction(newList.length - 1))
    })
  } /* 情况2.若播放列表中没有，再发送网络请求请求歌曲数据 */ else {
    const nowSong = playSongList[songIndex]
    dispatch(changeCurSongAction(nowSong))
    dispatch(changeListIndexAction(songIndex))
  }

  //获取歌词信息
  getSongLyric(ids).then((res) => {
    //拿到歌词对象
    const lyricString = res.lrc.lyric
    // //歌词解析-歌词的格式化（将每一句歌词的字符串解析成一个个对象）
    const lyrics = parseLyric(lyricString)
    console.log(lyrics)
    dispatch(changeLyricAction(lyrics))
  })
})
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playMode: 0, //0代表顺序播放 1代表随机播放 2代表单曲循环
  showList: false,
  playSongList: [
    {
      name: "唯一",
      id: 1807799505,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12676697,
          name: "告五人",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 21,
      crbt: null,
      cf: "",
      al: {
        id: 120954841,
        name: "运气来得若有似无",
        picUrl:
          "https://p1.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
        tns: [],
        pic_str: "109951165585701063",
        pic: 109951165585701060
      },
      dt: 270760,
      h: {
        br: 320000,
        fid: 0,
        size: 10832769,
        vd: -4566,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6499713,
        vd: -1928,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4333185,
        vd: -137,
        sr: 48000
      },
      sq: {
        br: 756174,
        fid: 0,
        size: 25592787,
        vd: -5359,
        sr: 48000
      },
      hr: {
        br: 1525028,
        fid: 0,
        size: 51614731,
        vd: -4565,
        sr: 48000
      },
      a: null,
      cd: "01",
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 21,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1400821,
      mv: 0,
      publishTime: 1609344000000
    },
    {
      name: "那么骄傲",
      id: 1995174272,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 37616858,
          name: "Bell玲惠",
          tns: {},
          alias: {}
        }
      ],
      alia: {},
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 5,
      crbt: null,
      cf: "",
      al: {
        id: 154330366,
        name: "那么骄傲",
        picUrl:
          "https://p2.music.126.net/8VJ3h64o4w4rsIngH3aGOg==/109951168054400877.jpg",
        tns: ["致女孩"],
        pic_str: "109951168054400877",
        pic: 109951168054400880
      },
      dt: 197859,
      h: {
        br: 320000,
        fid: 0,
        size: 7917165,
        vd: -55003,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4750317,
        vd: -52445,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3166893,
        vd: -50771,
        sr: 48000
      },
      sq: {
        br: 993207,
        fid: 0,
        size: 24564471,
        vd: -54986,
        sr: 48000
      },
      hr: {
        br: 1760944,
        fid: 0,
        size: 43552519,
        vd: -54988,
        sr: 48000
      },
      a: null,
      cd: "01",
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: {},
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 247864,
        name: "那么骄傲",
        artists: [
          {
            id: 8151,
            name: "金海心"
          }
        ],
        albumMeta: {
          id: 24830,
          name: "那么骄傲"
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 1667750400000,
      tns: ["致女孩"]
    }
  ],
  playSongIndex: 0
}

const PlayerSlice = createSlice({
  name: "playerData",
  initialState,
  reducers: {
    changeCurSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyrIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playSongList = payload
    },
    changeListIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changeShowListAction(state, { payload }) {
      state.showList = payload
    }
  }
})

export default PlayerSlice.reducer

export const {
  changeCurSongAction,
  changeLyricAction,
  changeLyrIndexAction,
  changePlayListAction,
  changeListIndexAction,
  changePlayModeAction,
  changeShowListAction
} = PlayerSlice.actions
