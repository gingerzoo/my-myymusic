import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { RankingWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import {
  getCurCommentAction,
  getCurTopListAction,
  getTopListAction
} from "./store"
import classNames from "classnames"
import { formatImgUrl } from "@/utils/format"
import TopRanking from "./c-cpns/top-ranking"
import RankingHeader from "./c-cpns/ranking-header"
import RankingList from "./c-cpns/ranking-list"
import RankingComments from "./c-cpns/ranking-comments"

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = (props) => {
  const { toplist } = useAppSelector((state) => ({
    toplist: state.ranking.toplist
  }))
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTopListAction())
    dispatch(getCurTopListAction(19723756))
    // dispatch(getCurCommentAction({ type: 2, pageNum: 1 }))
  }, [])
  return (
    <RankingWrapper>
      <div className="content wrapper_v2 wrap3">
        <TopRanking />
        <div className="content-right">
          <RankingHeader />
          <RankingList />
          <RankingComments />
        </div>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
