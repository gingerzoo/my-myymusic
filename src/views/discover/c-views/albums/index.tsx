import React, { memo, useCallback, useEffect, useState } from "react"

import type { ReactNode, FC } from "react"
import { AlbumsWrapper } from "./style"
import AreaHeaderV3 from "@/components/area-header-v3"
import { useAppDispatch, useAppSelector } from "@/store"
import {
  changeAllAlbAction,
  changeCurPageAction,
  getAllAlbumAction,
  getNewestAlbumAction
} from "./store"
import AreaHeaderV1 from "@/components/area-header-v1"
import HotAlbums from "./c-cpns/hot-albums"
import AlbumHeader from "./c-cpns/header-album"
import Pagination from "@/components/pagination"
import { AlbumCate } from "@/assets/data/local_data"

interface IProps {
  children?: ReactNode
}

const Albums: FC<IProps> = (props) => {
  const { newestAlbums, allAlbums, total, curPage } = useAppSelector(
    (state) => ({
      newestAlbums: state.album.newestAlbums,
      allAlbums: state.album.allAlbums,
      total: state.album.total,
      curPage: state.album.curPage
    })
  )

  const [nowPage, setPage] = useState(1)
  const dispatch = useAppDispatch()

  const onChangeHandle = useCallback(
    (page: number) => {
      setPage(page)
      dispatch(changeCurPageAction(page))
      dispatch(getAllAlbumAction(page))
    },
    [nowPage]
  )

  useEffect(() => {
    dispatch(getNewestAlbumAction())
  }, [])
  return (
    <AlbumsWrapper>
      <div className="content wrapper_v2">
        <AlbumHeader title="热门新碟" />
        <HotAlbums data={newestAlbums.slice(0, 10)} />
        <AlbumHeader title="全部新碟" cate={AlbumCate} />
        <HotAlbums data={allAlbums} />
        <Pagination
          current={curPage}
          total={total}
          pageSize={35}
          onChangeHandle={onChangeHandle}
        />
      </div>
    </AlbumsWrapper>
  )
}

export default memo(Albums)
