import React, { memo, useCallback, useState } from "react"

import type { ReactNode, FC } from "react"
import { HotAlbumWrapper } from "./style"
// import { useAppSelector } from "@/store"
import AlbumItem from "@/components/album-item"
import Pagination from "@/components/pagination"
import { useAppDispatch } from "@/store"
import { getAllAlbumAction } from "../../store"

interface IProps {
  children?: ReactNode
  data: any[]
}

const HotAlbum: FC<IProps> = (props) => {
  const { data } = props
  //   const { newestAlbums } = useAppSelector((state) => ({
  //     newestAlbums: state.album.newestAlbums
  //   }))
  //   const myData = hot ? data.slice(0, 10) : data

  return (
    <HotAlbumWrapper>
      {data.map((item, index) => {
        return (
          <li key={item.id} className="album-item">
            <AlbumItem
              itemData={item}
              singleArtist={false}
              picWidth={130}
              coverWidth={153}
              coverPosition={`0 -845px`}
              bigPlayIcon={true}
            />
          </li>
        )
      })}
    </HotAlbumWrapper>
  )
}

export default memo(HotAlbum)
