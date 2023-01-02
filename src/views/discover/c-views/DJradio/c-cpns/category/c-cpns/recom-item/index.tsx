import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RecomItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: {
    picUrl: string
    id: number
    name: string
    rcmdtext: string
  }
}

const RecomItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <RecomItemWrapper>
      <img src={formatImgUrl(itemData.picUrl, 150)}></img>
      <h3 className="title">{itemData.name}</h3>
      <p className="rcmd wrapno">{itemData.rcmdtext}</p>
    </RecomItemWrapper>
  )
}

export default memo(RecomItem)
