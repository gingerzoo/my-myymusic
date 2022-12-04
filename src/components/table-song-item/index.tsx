import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { TableSongItemWrapper } from "./style"
import { formatArtist, formatImgUrl, formatTime } from "@/utils/format"
import { useAppDispatch, useAppSelector } from "@/store"
import { getSongDetAction } from "@/views/player/store/player"

interface IProps {
  children?: ReactNode
  IsTopThree: boolean
  itemData: {
    id: number
    name: string
    mv: number
    dt: number
    ar: any[]
    al: {
      picUrl: string
    }
  }
  itemIndex: number
}

const TableSongItem: FC<IProps> = (props) => {
  const { itemData, itemIndex, IsTopThree } = props
  const { id, name, mv, dt, ar, al } = itemData

  const dispatch = useAppDispatch()
  function playBtnHandle(id: number) {
    dispatch(getSongDetAction(id))
  }

  return (
    <TableSongItemWrapper IsTopThree={IsTopThree}>
      <td>
        <div className="hd">
          <span className="num">{itemIndex + 1}</span>
          <span className="new-icon sprite_icon2"></span>
        </div>
      </td>
      <td>
        <div className="name-content">
          {IsTopThree && (
            <img src={formatImgUrl(al.picUrl, 50)} className="pic"></img>
          )}

          <span
            className="play-icon icon table"
            onClick={() => playBtnHandle(id)}
          ></span>
          <div className="fansl wrapno">
            <span className="song-name ">{name}</span>
            {mv != 0 && <span className="mv-icon table"></span>}
          </div>
        </div>
      </td>
      <td className="duration-oper">
        <span className="duration"> {formatTime(dt)}</span>
        <div className="operator">
          <div className="btn sprite_icon2 add-icon sprite_icon2"></div>
          <div className="btn table collect-icon"></div>
          <div className="btn table share-icon"></div>
          <div className="btn table download-icon"></div>
        </div>
      </td>
      <td className="wrapno">{formatArtist(ar)}</td>
    </TableSongItemWrapper>
  )
}

export default memo(TableSongItem)
