import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { SongOperBarWrapper } from "./style"

interface IProps {
  children?: ReactNode
  favorCount: number
  shareCount: number
  commentCount: number
}

const SongOperBar: FC<IProps> = (props) => {
  const { favorCount, shareCount, commentCount } = props
  return (
    <SongOperBarWrapper>
      <div className="play-add">
        <a href="/abc" className="sprite_button play">
          <span className="sprite_button  play-m">
            <i className="sprite_button play-icon"></i>
            <span className="play-text text">播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button"></a>
      </div>
      <a className="item sprite_button">
        <span className="sprite_button icon favor-icon text">
          ({favorCount})
        </span>
      </a>
      <a className="item sprite_button">
        <span className="sprite_button icon share-icon text">
          ({shareCount})
        </span>
      </a>
      <a className="item sprite_button">
        <span className="sprite_button icon download-icon text">下载</span>
      </a>
      <a className="item sprite_button">
        <span className="sprite_button icon comment-icon">({shareCount})</span>
      </a>
    </SongOperBarWrapper>
  )
}

export default memo(SongOperBar)
