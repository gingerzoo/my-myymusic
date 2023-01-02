import React, { memo, useEffect } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import type { ReactNode, FC } from "react"

import { useAppDispatch, useAppSelector } from "@/store"
import { ArtistWrapper } from "./style"
import ArtistHeader from "./c-cpns/header-artist"
import ArtistNav from "./c-cpns/nav-artist"
import { changeArtistIdAction, getArtistEveAction } from "./store"

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = (props) => {
  const [searchParams, setSearchPara] = useSearchParams()
  const id = searchParams.get("id")
  const { artistId } = useAppSelector((state) => ({
    artistId: state.artist.artistId
  }))

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(changeArtistIdAction(id))
    dispatch(getArtistEveAction())
    console.log("我变了")
  }, [artistId])
  return (
    <ArtistWrapper>
      <div className="content wrapper_v2 wrap4">
        <div className="left">
          <ArtistHeader />
          <ArtistNav />
          <Outlet />
        </div>
        <div className="right"></div>
      </div>
    </ArtistWrapper>
  )
}

export default memo(Artist)
