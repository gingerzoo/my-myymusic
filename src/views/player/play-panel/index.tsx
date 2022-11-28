import React, { memo } from "react"
import PropTypes from "prop-types"

import type { ReactNode, FC } from "react"
import { PlayPanelWrapper } from "./style"
import PanelHeader from "./c-cpns/panel-header"
import PanelSlist from "./c-cpns/panel-slist"
import PanelLyric from "./c-cpns/panel-lyric"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"

interface IProps {
  children?: ReactNode
}

const PlayPanel: FC<IProps> = (props) => {
  //   const { closePlayList } = props
  const { currentSong, lyrics, lyricIndex, playMode, playSongList } =
    useAppSelector(
      (state) => ({
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode,
        playSongList: state.player.playSongList
      }),
      shallowEqual
    )
  return (
    <PlayPanelWrapper>
      <PanelHeader />
      <div className="panel-content">
        <img
          className="play-bg"
          src={currentSong.al?.picUrl + `?imageView&blur=40x20`}
        ></img>
        <PanelSlist />
        <PanelLyric />
      </div>
    </PlayPanelWrapper>
  )
}

// PlayPanel.propTypes = {
//   closePlayList: PropTypes.func
// }

export default memo(PlayPanel)
