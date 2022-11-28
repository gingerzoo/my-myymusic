import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { TopRankWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import RankingItem from "@/views/discover/c-views/recommend/c-cpns/ranking-item"
import { useSelector } from "react-redux"
import { useAppSelector } from "@/store"

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = (props) => {
  //topRank默认为一个空数组
  const { topRank = [] } = useAppSelector((state) => ({
    topRank: state.recommend.topRank
  }))
  //   console.log("hi", topRank)
  return (
    <TopRankWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content recommend-top-bg">
        {topRank.map((item) => {
          return (
            <div key={item.id} className="item">
              <RankingItem itemData={item} />
            </div>
          )
        })}
      </div>
    </TopRankWrapper>
  )
}

export default memo(TopRanking)
