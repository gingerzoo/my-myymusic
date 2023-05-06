import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { SongWrapper } from "./style"
import SongsHeader from "./c-cpns/songs-header"
import SongsList from "./c-cpns/songs-list"
import { useAppDispatch } from "@/store"
import { getCategoryAction, getSongCateListAction } from "./store"

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongCateListAction({ page: 1 }))
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
