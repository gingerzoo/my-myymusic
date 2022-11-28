import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext
} from "react"
import type { ReactNode, FC, ElementRef } from "react"
import {
  PlayBarWrapper,
  PlayControlWrapper,
  PlayInfoWrapper,
  PlayOperWrapper
} from "./style"
import { Link } from "react-router-dom"
import { Slider, message } from "antd"
import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "@/store"
import { formatImgUrl, getPlaySong, formatTime } from "@/utils/format"
import {
  changeLyrIndexAction,
  changeMusicAction,
  changePlayModeAction,
  changeShowListAction
} from "../store/player"
import PlayPanel from "../play-panel"
import ShowLyricContext from "@/assets/context"

interface IProps {
  children?: ReactNode
}

const PlayBar: FC<IProps> = (props) => {
  //redux中的hook 获得redux中储存的当前歌曲数据
  const { currentSong, lyrics, lyricIndex, playMode, playSongList, showList } =
    useAppSelector(
      (state) => ({
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode,
        playSongList: state.player.playSongList,
        showList: state.player.showList
      }),
      shallowEqual
    )

  /*   props和state */
  //歌曲时长 处理播放进程
  const [curTime, setCurTime] = useState(0)
  //播放和停止键
  const [isPlay, setIsPlay] = useState(false)
  //获取歌曲的总时长
  const [duration, setDuration] = useState(0)
  //进度条长度
  const [progress, setProgress] = useState(0)
  //是否处于拖拽状态
  const [isSliding, setIsSliding] = useState(false)
  //音量键是否显示
  const [isVolume, setIsVolume] = useState(false)
  //是否展示播放列表
  //   const [isList, setIsList] = useState(false)
  const [MessageApi, contextHolder] = message.useMessage()

  //获得audio标签
  //   const AudioRef = useRef<ElementRef<typeof audio>>(null)
  const AudioRef = useRef<HTMLAudioElement>(null)

  /*   其它hook */
  const dispatch = useAppDispatch()

  // 请求数据
  useEffect(() => {
    // dispatch(getSongDetAction(1842025914))

    if (AudioRef.current) {
      AudioRef.current.src = getPlaySong(currentSong?.id)
    }

    //之所以写这个是因为currentSong一旦发生变化代表着有“切歌”的行为，一般切歌后我们希望立即播放该歌曲
    AudioRef.current
      ?.play()
      .then((res) => {
        setIsPlay(true)
        console.log("播放成功")
      })
      .catch((err) => console.log("播放失败", err))

    setDuration(currentSong?.dt)
  }, [currentSong])

  //播放按钮点击处理函数
  function playBtnClickHandle() {
    setIsPlay((isPlay) => {
      isPlay
        ? AudioRef.current?.pause()
        : AudioRef.current
            ?.play()
            .then(() => {
              console.log("播放成功")
            })
            .catch((err) => {
              console.log("播放失败", err)
            })
      console.log(!isPlay)
      return !isPlay
    })

    // console.log(isPlay)
    // isPlay ? AudioRef.current?.play() : AudioRef.current?.pause()
  }

  /* 音乐播放进度处理 (只要歌曲在播放就会不停调用这个函数)*/
  const HandleTimeUpdate = (e: any) => {
    //1.获取当前音乐播放时间  以秒为单位？然后将当前时间转化为毫秒，因为也要和duration的单位保持一致！！！
    const currentTime = AudioRef.current!.currentTime * 1000

    //2.在非拖拽情况下JI计算当前歌曲进度
    if (!isSliding) {
      //更新当前播放时间（时间显示）和进程（进度条显示）
      setCurTime(currentTime)
      setProgress((currentTime / duration) * 100)
    }

    //3.根据当前时间匹配歌词
    let nowIndex = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const time = lyrics[i].time
      if (time > curTime) {
        nowIndex = i - 1
        break
      }
    }
    //只要匹配的歌词和上一次一样就不更新
    //第一句歌词总是自己跑出来怎么办！
    if (nowIndex === -1 || nowIndex === lyricIndex) return
    dispatch(changeLyrIndexAction(nowIndex))

    MessageApi.open({
      content: lyrics[nowIndex].text,
      duration: 0,
      key: "lyric",
      className: "mylyric",
      style: { display: showList ? "none" : "block" }
    })
  }

  /* 点击进度条处理时间 */
  function handleSliderChanged(value: number) {
    //获取点击时歌曲应走的时长(毫秒)
    const currentTime = (value / 100) * duration
    //设置当前歌曲播放时间
    AudioRef.current!.currentTime = currentTime / 1000
    //设置curTime
    setCurTime(currentTime)
    //设置进度条的值(长度)
    setProgress(value)
    //鼠标点击完成松手后让播放条继续自己前进
    setIsSliding(false)
  }

  /* 拖拽进度条处理事件 注意这个事件触发后onAfterChange一定会触发!!!!!!*/
  function handleSliderChanging(value: number) {
    //拖拽过程中的时间会随着拖拽位置改变而改变!!!!!!!
    //获取点击时歌曲应走的时长(毫秒)
    const currentTime = (value / 100) * duration
    //设置当前歌曲播放时间
    AudioRef.current!.currentTime = currentTime / 1000
    //设置curTime
    setCurTime(currentTime)
    //设置进度条的值(长度)
    setProgress(value)
    //设置为拖拽状态，此时onTimeUpdate中的  setCurTime和setProgress不起作用（时间和进度条）
    setIsSliding(true)
  }

  /* 歌曲模式切换处理函数 */
  function loopBtnHandle() {
    playMode == 2
      ? dispatch(changePlayModeAction(0))
      : dispatch(changePlayModeAction(playMode + 1))
    /* if(playMode!=2){
        dispatch(changePlayModeAction(playMode+1))
    }
 */
  }

  /* 切歌按钮点击的处理函数 */
  function changeSongHandle(isNext = true) {
    setIsPlay(true)
    dispatch(changeMusicAction(isNext))
  }

  /* 当歌曲播放完后自动播放下一首 */
  function handleTimeEnded() {
    if (playMode == 2) {
      AudioRef.current!.currentTime = 0
      AudioRef?.current?.play()
    } else {
      changeSongHandle(true)
    }
  }

  /* 处理音量键 */
  function handleVolumeBtn(e: any) {
    //当点击目标不是音量的进度条时切换音量控制条显示状态
    if (!e.target.className.includes("ant-slider")) {
      console.log(e.target.className)
      setIsVolume(!isVolume)
    }
  }

  /* 音量键发生改变时 */
  function handleSliderChangedV2(value: number) {
    AudioRef.current!.volume = value / 100
    console.log(AudioRef.current!.volume)
  }

  /* 音量键被拖动时 */
  /*   function handleSliderChangingV2(value: number) {
    AudioRef.current!.volume = value / 100
  } */

  /* 点击歌曲列表时 */
  function playListBtnHandle() {
    // const NewshowList = !showList
    dispatch(changeShowListAction(!showList))
  }

  /*   const closePlayList = useCallback(function closePlayList() {
  }, []) */
  return (
    <ShowLyricContext.Provider value={showList}>
      <PlayBarWrapper className="sprite_playbar">
        {contextHolder}
        <div className="content wrapper_v2">
          {/*烦死了为啥传数据一直报错 */}
          <PlayControlWrapper isPlay={isPlay}>
            <button
              className="sprite_playbar btn prev"
              onClick={() => changeSongHandle(false)}
            ></button>
            <button
              className="sprite_playbar btn play"
              onClick={(e) => playBtnClickHandle()}
            ></button>
            <button
              className="sprite_playbar btn next"
              onClick={() => changeSongHandle()}
            ></button>
          </PlayControlWrapper>
          <PlayInfoWrapper>
            <div className="image">
              <Link to="/discover/singers">
                <img src={formatImgUrl(currentSong?.al?.picUrl, 34)}></img>
              </Link>
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong?.name}</span>
                {/* 关于歌手信息那是个数组!*/}
                <span className="singer-name">{currentSong?.ar?.[0].name}</span>
              </div>
              <div className="process">
                <Slider
                  max={100}
                  value={progress}
                  step={0.5}
                  onAfterChange={handleSliderChanged}
                  onChange={handleSliderChanging}
                />
                <div className="time">
                  <div className="current">{formatTime(curTime)}</div>
                  <div className="divider"> / </div>
                  <div className="duration">{formatTime(duration)}</div>
                </div>
              </div>
            </div>
          </PlayInfoWrapper>
          <PlayOperWrapper
            playMode={playMode}
            isVolume={isVolume}
            isList={showList}
          >
            <div className="left">
              <div className="btn lyric sprite_lyrics"></div>
              <div className="btn favor sprite_playbar"></div>
              <div className="btn share sprite_playbar"></div>
            </div>
            <div className="right sprite_playbar">
              <div
                className="btn volume sprite_playbar"
                onClick={(e) => handleVolumeBtn(e)}
              >
                <div className="volumeBox sprite_playbar">
                  <Slider
                    max={100}
                    vertical
                    onAfterChange={handleSliderChangedV2}
                  />
                  {/* onChange={handleSliderChangingV2} */}
                </div>
              </div>

              <div
                className="btn loop sprite_playbar"
                onClick={loopBtnHandle}
              ></div>
              <div
                className="btn playlist sprite_playbar"
                onClick={playListBtnHandle}
              ></div>
            </div>
          </PlayOperWrapper>
          {showList && <PlayPanel />}
          {/*
        {isList && (
          <PlayListWrapper>
            <div className="listhd playpanel_bg">
              <div className="listhd-left">
                <h4>播放列表{playSongList.length}</h4>
                <div className="oper">
                  <a>
                    <span className="btn favor"></span>收藏全部
                  </a>
                  <span className="line"></span>
                  <a>
                    <span className="btn delete"></span>删除
                  </a>
                </div>
              </div>

              <div className="listhd-right">
                <p className="song-name">{currentSong.name}</p>
                <span className="close"></span>
              </div>
            </div>
            <div className="listbd">
              <img
                className="play-bg"
                src={currentSong.al?.picUrl + `?imageView&blur=40x20`}
              ></img>
              <div className="listbd-left"></div>
              <div className="mask-l"></div>
              <div className="bline-m"></div>

              <div className="listbd-right"></div>
              <div className="mask-r"></div>
              <div className="bline-r"></div>
            </div>
          </PlayListWrapper>
        )} */}
        </div>

        <audio
          ref={AudioRef}
          src=""
          onTimeUpdate={HandleTimeUpdate}
          onEnded={handleTimeEnded}
        />
      </PlayBarWrapper>
    </ShowLyricContext.Provider>
  )
}

export default memo(PlayBar)
