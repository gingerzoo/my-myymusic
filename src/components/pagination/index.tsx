import React, { memo, ReactElement } from "react"

import type { ReactNode, FC } from "react"
import { PaginatonWrapper } from "./style"
import { Pagination } from "antd"
import { useAppDispatch } from "@/store"
import { changeCurPageAction } from "@/views/discover/c-views/songs/store"

interface IProps {
  children?: ReactNode
  current: number
  total: number
  pageSize?: number
  onChangeHandle: (page: number, pageSize: number) => void
  //   nextBtnHandle: (IsNext: boolean) => void
}

const Pagniation: FC<IProps> = (props) => {
  const { current, total, onChangeHandle, pageSize } = props
  const dispatch = useAppDispatch()

  function itemRender(
    page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: ReactNode
  ) {
    if (type == "prev") {
      return (
        <button
          className="control prev sprite_button2"
          //   onClick={() => nextBtnHandle(false)}
        >
          上一页
        </button>
      )
    }
    if (type == "next") {
      return (
        <button
          className="control next sprite_button2"
          //   onClick={() => nextBtnHandle(true)}
        >
          下一页
        </button>
      )
    }
    return originalElement
  }

  return (
    <PaginatonWrapper>
      <Pagination
        defaultCurrent={1}
        total={total}
        defaultPageSize={35}
        pageSize={pageSize}
        itemRender={itemRender}
        showSizeChanger={false}
        current={current}
        onChange={onChangeHandle}
      />
    </PaginatonWrapper>
  )
}

export default memo(Pagniation)
