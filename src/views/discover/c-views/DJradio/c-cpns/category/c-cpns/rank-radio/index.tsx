import React, { memo, useCallback, useState } from "react"

import type { ReactNode, FC } from "react"
import { RadioRankingWrapper } from "./style"
import AlbumHeader from "@/views/discover/c-views/albums/c-cpns/header-album"
import { useAppDispatch, useAppSelector } from "@/store"
import RankItem from "../rank-item"
import Pagination from "@/components/pagination"
import { getDjCateHotAction } from "../../../../store"

interface IProps {
  children?: ReactNode
}

const RadioRanking: FC<IProps> = (props) => {
  const { cateHot, total } = useAppSelector((state) => ({
    cateHot: state.djRadio.cateHot,
    total: state.djRadio.hotCount
  }))

  const [nowPage, setPage] = useState(1)
  const dispatch = useAppDispatch()

  const onChangeHandle = useCallback(
    (page: number) => {
      setPage(page)

      dispatch(getDjCateHotAction(page))
    },
    [nowPage]
  )
  return (
    <RadioRankingWrapper>
      <AlbumHeader title="电台排行榜" />
      <ul className="list">
        {cateHot.map((item, index) => {
          return <RankItem itemData={item} key={item.id} />
        })}
      </ul>
      <Pagination
        total={total}
        pageSize={32}
        current={nowPage}
        onChangeHandle={onChangeHandle}
      />
    </RadioRankingWrapper>
  )
}

export default memo(RadioRanking)
