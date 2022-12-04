import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { SongWrapper } from "./style"
import SongsHeader from "./c-cpns/songs-header"
import SongsList from "./c-cpns/songs-list"
import { useAppDispatch, useAppSelector } from "@/store"
import { getCategoryAction, getSongCateListAction } from "./store"
import Pagination from "@/components/pagination"
import { getSongCategory } from "./service"

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongCateListAction(1))
    dispatch(getCategoryAction())
  }, [])
  return (
    <SongWrapper>
      <div className="content wrapper_v2">
        <SongsHeader />
        <SongsList />
      </div>
    </SongWrapper>
  )
}

export default memo(Songs)
