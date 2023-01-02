import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ProgramBoxWrapper } from "./style"
import AlbumHeader from "@/views/discover/c-views/albums/c-cpns/header-album"
import { useAppSelector } from "@/store"
import ProgramItem from "../program-item"

interface IProps {
  children?: ReactNode
}

const ProgramBox: FC<IProps> = (props) => {
  const { djRecom } = useAppSelector((state) => ({
    djRecom: state.djRadio.djRecom
  }))

  //   const data = IsRecom ? djRecom : djRanking
  return (
    <ProgramBoxWrapper>
      <AlbumHeader title="推荐节目" hasMore={true} />
      <ul className="program-list">
        {djRecom.slice(0, 10).map((item, index) => {
          return <ProgramItem key={index} itemData={item} />
        })}
      </ul>
    </ProgramBoxWrapper>
  )
}

export default memo(ProgramBox)
