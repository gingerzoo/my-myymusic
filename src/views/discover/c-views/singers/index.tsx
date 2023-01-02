import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { SingerWrapper } from "./style"

import SingerCategory from "./c-cpns/singer-category"
import { useAppDispatch } from "@/store"
import { getSingerListAction } from "./store"
import SingerList from "./c-cpns/singer-list"

interface IProps {
  children?: ReactNode
}

const Singers: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSingerListAction())
  }, [])
  return (
    <SingerWrapper>
      <div className="content wrapper_v2 wrap2">
        <div className="content-left">
          <SingerCategory />
        </div>
        <div className="content-right">
          {/* <AreaHeaderV3 title={"入驻歌手"} /> */}
          <SingerList />
        </div>
      </div>
    </SingerWrapper>
  )
}

export default memo(Singers)
