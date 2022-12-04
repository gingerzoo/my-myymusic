import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { TopRankingWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import classNames from "classnames"
import { formatImgUrl } from "@/utils/format"
import { getCurTopListAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = (props) => {
  const { toplist } = useAppSelector((state) => ({
    toplist: state.ranking.toplist
  }))

  const dispatch = useAppDispatch()

  function cateChangeHandle(id: number) {
    dispatch(getCurTopListAction(id))
  }
  return (
    <TopRankingWrapper>
      {toplist.map((item, index) => {
        const header = <h3 className="header">{item.type}</h3>
        return (
          <div
            key={item.type}
            className={classNames(`rankinglist-${index + 1}`)}
          >
            {header}
            <ul className={classNames(`ul-${index + 1}`)}>
              {item.info.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className="m-li"
                    onClick={(e) => cateChangeHandle(item.id)}
                  >
                    <img src={formatImgUrl(item.coverImgUrl, 40)}></img>
                    <div className="info">
                      <p className="item-name wrapno">{item.name}</p>
                      <p className="item-freq">{item.updateFrequency}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
