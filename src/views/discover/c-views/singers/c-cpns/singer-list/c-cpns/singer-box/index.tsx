import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { SingerBoxWrapper } from "./style"
import { useAppSelector } from "@/store"
import SongItem from "@/components/song-item"
import SingerItem from "../singer-item"

interface IProps {
  children?: ReactNode
}

const SingerBox: FC<IProps> = (props) => {
  const { singerList } = useAppSelector((state) => ({
    singerList: state.singerCatList.singerList
  }))
  return (
    <SingerBoxWrapper>
      {singerList.slice(0, 10).map((item, index) => {
        return <SingerItem key={index} itemData={item} />
      })}
    </SingerBoxWrapper>
  )
}

export default memo(SingerBox)
