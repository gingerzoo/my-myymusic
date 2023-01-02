import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { MvItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: {
    id: number
    name: string
    imgurl16v9: string
  }
}

const MvItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MvItemWrapper>
      <div className="mv-cover">
        <img src={formatImgUrl(itemData.imgurl16v9, 137)}></img>
        <a className="cover sprite_cover"></a>
        <a className="play-icon sprite_icon"></a>
      </div>

      <div className="info">
        <p className="wrapno">{itemData.name}</p>
      </div>
    </MvItemWrapper>
  )
}

export default memo(MvItem)
