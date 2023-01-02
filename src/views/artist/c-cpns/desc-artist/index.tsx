import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { ArtistDescWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import { getArtistDescAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const ArtistDesc: FC<IProps> = (props) => {
  const { desc, info } = useAppSelector((state) => ({
    desc: state.artist.describe,
    info: state.artist.info
  }))
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getArtistDescAction())
  }, [])
  return (
    <ArtistDescWrapper>
      <h2 className="first">
        <i>&nbsp;</i>
        {info && info.name}简介
      </h2>
      <p>{desc && desc.briefDesc}</p>
      {desc?.introduction?.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.ti}</h2>
            <p>{item.txt}</p>
          </div>
        )
      })}
    </ArtistDescWrapper>
  )
}

export default memo(ArtistDesc)
