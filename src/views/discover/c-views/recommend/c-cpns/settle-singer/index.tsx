import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { SettleWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"
import { useSelector } from "react-redux"
import { useAppSelector } from "@/store"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = (props) => {
  const { settleSinger } = useAppSelector((state) => ({
    settleSinger: state.recommend.settleSinger
  }))
  return (
    <SettleWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreLink="/discover/singers"
        moreText="查看全部"
      />
      <ul className="artists">
        {settleSinger.map((item) => {
          return (
            <li key={item.name}>
              <a href="/discover/singers">
                <img src={formatImgUrl(item.picUrl, 62)}></img>
                <div className="info">
                  <h3 className="name">{item.name}</h3>
                  <span className="alia wrapno">{item.alias.join(" ")}</span>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="applyFor">
        <a href="#">申请成为网易音乐人</a>
      </div>
    </SettleWrapper>
  )
}

export default memo(SettleSinger)
