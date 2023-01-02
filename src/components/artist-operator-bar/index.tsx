import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ArtOpeBarWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const ArtOpeBar: FC<IProps> = (props) => {
  return (
    <ArtOpeBarWrapper>
      <div className="hd-left">
        <div className="play-add">
          <a href="/abc" className="play">
            <span className="play-m sprite_button">
              <i className="sprite_button play-icon"></i>
              <span className="play-text text">播放</span>
            </span>
          </a>
          <a href="/abc" className="add-icon sprite_button"></a>
        </div>
        <a className="item sprite_button subsribe">
          <span className="sprite_button icon favor-icon text">热门收藏50</span>
        </a>
      </div>

      <a className="hot-single sprite_button item">
        <span className="sprite_button icon">
          <i className="text">热门单曲</i>
          <i className="arrow-bottom icon3"></i>
        </span>
      </a>
    </ArtOpeBarWrapper>
  )
}

export default memo(ArtOpeBar)
