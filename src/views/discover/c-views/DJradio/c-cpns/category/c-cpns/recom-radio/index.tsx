import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RadioRecomWrapper } from "./style"
import AlbumHeader from "@/views/discover/c-views/albums/c-cpns/header-album"
import { useAppSelector } from "@/store"
import RecomItem from "../recom-item"

interface IProps {
  children?: ReactNode
}

const RadioRecom: FC<IProps> = (props) => {
  const { cateRecom } = useAppSelector((state) => ({
    cateRecom: state.djRadio.cateRecom
  }))
  return (
    <RadioRecomWrapper>
      <AlbumHeader title="优秀新电台" />
      <ul className="list">
        {cateRecom.slice(0, 5).map((item, index) => {
          return <RecomItem itemData={item} key={item.id} />
        })}
      </ul>
    </RadioRecomWrapper>
  )
}

export default memo(RadioRecom)
