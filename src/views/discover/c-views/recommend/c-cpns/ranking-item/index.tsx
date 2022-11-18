import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RankItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
  itemData: any
}

const RankItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks } = itemData
  return (
    <RankItemWrapper>
      <div className="top">
        <div className="image">
          <img src={formatImgUrl(itemData.coverImgUrl, 80)} />
          <a className="cover sprite_cover" />
        </div>
        <div className="info">
          <div className="listName">{itemData.name}</div>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list-item">
        {tracks.slice(0, 10).map((item: any, index: string) => {
          return (
            <div key={item.id} className="item">
              <span className="song-count">{index + 1}</span>
              <a className="song-name wrapno">{item.name}</a>
            </div>
          )
        })}
      </div>
      <div className="more">
        <Link to="/discover/ranking">查看全部{">"}</Link>
      </div>
    </RankItemWrapper>
  )
}

export default memo(RankItem)
