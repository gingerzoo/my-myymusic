import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { TableSongItemV2Wrapper } from "./style"
import { formatArtist, formatImgUrl, formatTime } from "@/utils/format"
import { useAppDispatch, useAppSelector } from "@/store"
import { getSongDetAction } from "@/views/player/store/player"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
  itemIndex: number

  itemData: {
    id: number
    name: string
    mv: number
    dt: number
    alia: string[]
    al: {
      id: number
      name: string
      picUrl: string
    }
  }
}

const TableSongItemV2: FC<IProps> = (props) => {
  const { itemData, itemIndex } = props
  const { id, name, mv, dt, al, alia } = itemData

  const dispatch = useAppDispatch()
  function playBtnHandle(id: number) {
    dispatch(getSongDetAction(id))
  }

  return (
    <TableSongItemV2Wrapper>
      <td>
        <div className="num">{itemIndex + 1}</div>
      </td>
      <td>
        <div className="name-content">
          <span
            className="play-icon icon table"
            onClick={() => playBtnHandle(id)}
          ></span>
          <div className="fansl wrapno">
            <span className="song-name ">
              {name}

              {alia.length > 0 && <i className="subp">-({alia[0]})</i>}
            </span>
            {mv != 0 && (
              <Link className="mv-icon table" to={`/mv?id=${mv}`}></Link>
            )}
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
      <td className="wrapno">{al.name}</td>
    </TableSongItemV2Wrapper>
  )
}

export default memo(TableSongItemV2)
