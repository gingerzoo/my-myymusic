import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RadioBoxWrapper } from "./style"
import AlbumHeader from "@/views/discover/c-views/albums/c-cpns/header-album"
import RadioItem from "../radio-item"

interface IProps {
  children?: ReactNode
  ItemData: [
    {
      id: number
      name: string
      rcmdtext: string
      picUrl: string
    }
  ]
  title: string
}

const RadioBox: FC<IProps> = (props) => {
  const { ItemData, title } = props
  return (
    <RadioBoxWrapper>
      <AlbumHeader title={title + ` · 电台`} hasMore={true} />
      <ul className="radio-list">
        {ItemData.map((item, index) => {
          return <RadioItem key={index} ItemData={item} />
        })}
      </ul>
    </RadioBoxWrapper>
  )
}

export default memo(RadioBox)
