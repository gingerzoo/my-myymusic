import React, { memo, useCallback, useState } from "react"

import type { ReactNode, FC } from "react"
import { ArtistAlbumWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import AlbumItem from "@/components/album-item"
import Pagination from "@/components/pagination"
import { getArtistAlbumAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const ArtistAlbum: FC<IProps> = (props) => {
  const { albums, detail } = useAppSelector((state) => ({
    albums: state.artist.albums,
    detail: state.artist.detail
  }))
  const [nowPage, setPage] = useState(1)
  const dispatch = useAppDispatch()

  const onChangeHandle = useCallback(
    (page: number) => {
      setPage(page)
      dispatch(getArtistAlbumAction(page))
    },
    [nowPage]
  )

  return (
    <ArtistAlbumWrapper>
      <div className="album-list">
        {albums &&
          albums.map((item, index) => {
            return (
              <div className="album-item" key={item.id}>
                <AlbumItem
                  itemData={item}
                  singleArtist={true}
                  picWidth={120}
                  coverWidth={145}
                  coverPosition={`-170px -850px`}
                  bigPlayIcon={true}
                />
              </div>
            )
          })}
      </div>

      <Pagination
        current={nowPage}
        total={detail ? detail.artist.albumSize : 0}
        pageSize={12}
        onChangeHandle={onChangeHandle}
      />
    </ArtistAlbumWrapper>
  )
}

export default memo(ArtistAlbum)
