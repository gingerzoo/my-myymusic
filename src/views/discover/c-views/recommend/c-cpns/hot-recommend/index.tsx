import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { HotRecomWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"

import { useAppSelector } from "@/store"
import SongItem from "@/components/song-item"

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
  const { hotRecommend } = useAppSelector((state) => ({
    hotRecommend: state.recommend.hotRecommend
  }))
  return (
    <HotRecomWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />

      <div className="recommend-list">
        {hotRecommend.map((item, index) => {
          return <SongItem key={item.id} itemData={item} width={140} />
        })}
      </div>
    </HotRecomWrapper>
  )
}

export default memo(HotRecommend)
