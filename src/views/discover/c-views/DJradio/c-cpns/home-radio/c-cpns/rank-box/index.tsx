import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RankingBoxWrapper } from "./style"
import AlbumHeader from "@/views/discover/c-views/albums/c-cpns/header-album"
import { useAppSelector } from "@/store"
import RankItem from "../rank-item"

interface IProps {
  children?: ReactNode
}

const RankingBox: FC<IProps> = (props) => {
  const { djRanking } = useAppSelector((state) => ({
    djRanking: state.djRadio.djRanking
  }))

  const highScore = djRanking?.[0]?.score || 0
  return (
    <RankingBoxWrapper>
      <AlbumHeader title="节目排行榜" hasMore={true} />
      <ul className="ranking-list">
        {djRanking.slice(0, 10).map((item, index) => {
          return <RankItem key={index} itemData={item} highScore={highScore} />
        })}
      </ul>
    </RankingBoxWrapper>
  )
}

export default memo(RankingBox)
