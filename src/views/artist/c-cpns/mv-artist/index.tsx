import React, { memo, useCallback, useEffect, useState } from "react"

import type { ReactNode, FC } from "react"
import { ArtistMvWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import MvItem from "@/components/mv-item"
import { getArtistMvAction } from "../../store"
import Pagination from "@/components/pagination"

interface IProps {
  children?: ReactNode
}

const ArtistMv: FC<IProps> = (props) => {
  const { mvs, detail } = useAppSelector((state) => ({
    mvs: state.artist.mvs,
    detail: state.artist.detail
  }))

  const dispatch = useAppDispatch()

  const [nowPage, setPage] = useState(1)

  const onChangeHandle = useCallback(
    (page: number) => {
      setPage(page)
      dispatch(getArtistMvAction(page))
    },
    [nowPage]
  )

  useEffect(() => {
    dispatch(getArtistMvAction(1))
  }, [])
  return (
    <ArtistMvWrapper>
      <div className="mvs-list">
        {mvs.map((item, index) => {
          return (
            <div className="mvs-item" key={item.id}>
              <MvItem itemData={item} />
            </div>
          )
        })}
      </div>
      <Pagination
        total={detail ? detail.artist.mvSize : 0}
        current={nowPage}
        onChangeHandle={onChangeHandle}
        pageSize={12}
      />
    </ArtistMvWrapper>
  )
}

export default memo(ArtistMv)
