import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { PanelLisWrapper } from "./style"
import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "@/store"
import { formatDate, formatTime } from "@/utils/format"
import classNames from "classnames"
import {
  changeCurSongAction,
  changeMusicAction,
  getSongDetAction
} from "@/views/player/store/player"

interface IProps {
  children?: ReactNode
}

const PanelSlist: FC<IProps> = (props) => {
  const { currentSong, playSongList } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playSongList: state.player.playSongList
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  function itemBtnClickHandle(id: number) {
    dispatch(getSongDetAction(id))
  }
  return (
    <PanelLisWrapper>
      <div className="listbd-left">
        <ul className="playlist">
          {playSongList.map((item) => {
            return (
              // background-color: rgba(0,0,0,0.3);
              <li
                key={item.id}
                className={"playlist-item"}
                style={{
                  backgroundColor:
                    item.id == currentSong.id ? "rgba(0,0,0,0.3)" : "#202020"
                }}
                onClick={() => {
                  itemBtnClickHandle(item.id)
                }}
              >
                <span
                  className={classNames("flag", {
                    sprite_playlist: item.id == currentSong.id
                  })}
                ></span>
                <div className="song-name wrapno">{item.name}</div>
                <div className="icons">
                  <span className="btn favor sprite_playlist"></span>

                  <span className="btn share sprite_playlist"></span>

                  <span className="btn download sprite_playlist"></span>

                  <span className="btn delete sprite_playlist"></span>
                </div>
                <div className="song-artist wrapno">{item.ar?.[0].name}</div>
                <div className="song-dur">{formatTime(item.dt)}</div>
                <div className="source sprite_playlist"></div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mask-l"></div>
    </PanelLisWrapper>
  )
}

export default memo(PanelSlist)
