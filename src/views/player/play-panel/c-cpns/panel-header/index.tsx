import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { PanelhdWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import { changeShowListAction } from "@/views/player/store/player"

interface IProps {
  children?: ReactNode
}

const Panelhead: FC<IProps> = (props) => {
  const { currentSong, playSongList, showList } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playSongList: state.player.playSongList,
      showList: state.player.showList
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  function closeBtnHandle() {
    dispatch(changeShowListAction(false))
  }

  return (
    <PanelhdWrapper>
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
          <span className="close" onClick={closeBtnHandle}></span>
        </div>
      </div>
    </PanelhdWrapper>
  )
}

export default memo(Panelhead)
