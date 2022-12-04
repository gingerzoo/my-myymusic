import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RankingLiWrapper } from "./style"
import { useAppSelector } from "@/store"
import TableSongItem from "@/components/table-song-item"
import AreaHeaderV3 from "@/components/area-header-v3"

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = (props) => {
  const { curToplist } = useAppSelector((state) => ({
    curToplist: state.ranking.curToplist
  }))
  let flag = false
  return (
    <RankingLiWrapper>
      <AreaHeaderV3
        title="歌曲列表"
        submessage={`${curToplist.tracks.length}首歌`}
        moreText={curToplist.playCount}
      />
      <div className="list-body">
        <table>
          <thead>
            <tr>
              <th className="first"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="artist">歌手</th>
            </tr>
          </thead>
          <tbody>
            {curToplist.tracks.map((item, index) => {
              if (index < 3) flag = true
              else flag = false
              return (
                <TableSongItem
                  IsTopThree={flag}
                  key={item.id}
                  itemData={item}
                  itemIndex={index}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </RankingLiWrapper>
  )
}

export default memo(RankingList)
