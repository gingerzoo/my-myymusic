import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RadioItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  ItemData: {
    id: number
    name: string
    rcmdtext: string
    picUrl: string
  }
}

const RadioItem: FC<IProps> = (props) => {
  const { ItemData } = props
  return (
    <RadioItemWrapper>
      <img src={formatImgUrl(ItemData.picUrl, 120)} />
      <div className="info">
        <h3>{ItemData.name}</h3>
        <p>{ItemData.rcmdtext}</p>
      </div>
    </RadioItemWrapper>
  )
}

export default memo(RadioItem)
