import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RankingItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  highScore: number
  itemData: {
    rank: number
    lastRank: number
    score: number
    program: {
      coverUrl: string
      mainSong: {
        name: string
        id: number
      }
      radio: {
        picUrl: string
        name: string
        id: number
      }
    }
  }
}

const RankingItem: FC<IProps> = (props) => {
  const { itemData, highScore } = props
  const nowRank = String(itemData.rank).padStart(2, "0")
  const changeRank = itemData.rank - itemData.lastRank
  const nowProcess = (itemData.score / highScore) * 100 + `%`
  return (
    <RankingItemWrapper changeRank={changeRank} lastRank={itemData.lastRank}>
      <div className="left">
        <div className="rank">
          <em>{nowRank}</em>
          {itemData.lastRank != -1 ? (
            <div className="changeRank">
              <i className="sprite_icon2 c-icon"></i>
              {/* <span className="changeRank-num">{Math.abs(changeRank)}</span> */}
              {Math.abs(changeRank)}
            </div>
          ) : (
            <i className="sprite_icon2 n-icon"></i>
          )}
        </div>
        <img src={formatImgUrl(itemData.program.coverUrl, 40)}></img>

        <div className="info wrapno">
          <h3 className="name wrapno">{itemData.program.mainSong.name}</h3>
          {itemData.program.radio && (
            <p className="brand wrapno">{itemData.program.radio!.name}</p>
          )}
        </div>
      </div>
      <div className="right sprite_table">
        <span className="sprite_table hi" style={{ width: nowProcess }}>
          <i className="sprite_table"></i>
        </span>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RankingItem)
