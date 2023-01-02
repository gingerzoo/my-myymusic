import React, { memo, useCallback } from "react"

import type { ReactNode, FC } from "react"
import { AlbumHeaderWrapper } from "./style"
import { AnyListenerPredicate } from "@reduxjs/toolkit"
import { useAppDispatch } from "@/store"
import { changeCurCateAction, getAllAlbumAction } from "../../store"

interface Icate {
  title: string
  type: string
}
interface IProps {
  children?: ReactNode
  title: string
  cate?: Icate[]
  hasMore?: boolean
}

// const {}

const AlbumHeader: FC<IProps> = (props) => {
  const { title, cate, hasMore } = props
  const dispatch = useAppDispatch()

  const cateClickHandle = useCallback((area: string) => {
    dispatch(changeCurCateAction(area))
    dispatch(getAllAlbumAction(1))
  }, [])
  return (
    <AlbumHeaderWrapper>
      <div className="left">
        <h3>{title}</h3>
        {cate && (
          <div className="category">
            {cate.map((item, index) => {
              return (
                <div key={item.title}>
                  <a
                    className="cate-item"
                    onClick={() => cateClickHandle(item.type)}
                  >
                    {item.title}
                  </a>
                  {index < cate.length - 1 && (
                    <span className="divider">|</span>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
      {hasMore && (
        <div className="right">
          <a className="more">更多&gt;</a>
        </div>
      )}
    </AlbumHeaderWrapper>
  )
}

export default memo(AlbumHeader)
