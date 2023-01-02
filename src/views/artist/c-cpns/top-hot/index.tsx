import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ArtistTopHotWrapper } from "./style"
import { useAppSelector } from "@/store"

import ArtOpeBar from "@/components/artist-operator-bar"
import TableSongItemV2 from "@/components/table-song-itemV2"

interface IProps {
  children?: ReactNode
}

const ArtistTopHot: FC<IProps> = (props) => {
  const { topList } = useAppSelector((state) => ({
    topList: state.artist.topList
  }))
  return (
    <ArtistTopHotWrapper>
      <ArtOpeBar />
      <table>
        <tbody>
          {topList &&
            topList.map((item, index) => {
              return (
                <TableSongItemV2
                  itemData={item}
                  itemIndex={index}
                  key={item.id}
                />
              )
            })}
        </tbody>
      </table>
    </ArtistTopHotWrapper>
  )
}

export default memo(ArtistTopHot)
