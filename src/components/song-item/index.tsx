import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div className="top">
        <img src={itemData.picUrl} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <div>
              <i className="sprite_icon headset"></i>
              <span className="count">
                {Math.floor(itemData.playCount / 10000) + "万"}{" "}
              </span>
            </div>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </ItemWrapper>
  )
}

export default memo(SongItem)
