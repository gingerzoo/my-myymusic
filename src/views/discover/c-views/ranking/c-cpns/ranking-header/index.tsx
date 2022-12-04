import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RankingLiWrapper } from "../ranking-list/style"
import { RankingHdWrapper } from "./style"
import { useAppSelector } from "@/store"
import { formatDateTime, formatImgUrl } from "@/utils/format"
import SongOperatorBar from "@/components/song-operator-bar"
// import { SongOperBar } from "@/components/song-operator-bar"

interface IProps {
  children?: ReactNode
}

const RankingHeader: FC<IProps> = (props) => {
  const { curTopList, freqList } = useAppSelector((state) => ({
    curTopList: state.ranking.curToplist,
    freqList: state.ranking.updateRreqlist
  }))
  return (
    <RankingHdWrapper>
      <div className="cover">
        <img src={formatImgUrl(curTopList.coverImgUrl, 140)}></img>
        <span className="mask sprite_cover"></span>
      </div>
      <div className="info">
        <h3 className="info-name">{curTopList.name}</h3>
        <p className="info-time">
          <i className="clock sprite_icon2"></i>
          <span className="update-latest">
            最近更新:&nbsp;{formatDateTime(curTopList.updateTime)}
          </span>
          <span className="update-freq">({freqList[curTopList.id]})</span>
        </p>
        <SongOperatorBar
          favorCount={curTopList.subscribedCount}
          shareCount={curTopList.shareCount}
          commentCount={curTopList.commentCount}
        />
      </div>
    </RankingHdWrapper>
  )
}

export default memo(RankingHeader)
