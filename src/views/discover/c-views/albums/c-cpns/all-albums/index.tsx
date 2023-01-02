import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { AllAlbumWrapper } from "./style"
import { useAppSelector } from "@/store"
import AlbumItem from "@/components/album-item"

interface IProps {
  children?: ReactNode
}

const AllAlbum: FC<IProps> = (props) => {
  const { allAlbums } = useAppSelector((state) => ({
    allAlbums: state.album.allAlbums
  }))
  return (
    <AllAlbumWrapper>
      {allAlbums.map((item, index) => {
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
    </AllAlbumWrapper>
  )
}

export default memo(AllAlbum)
