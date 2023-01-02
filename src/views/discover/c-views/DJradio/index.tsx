import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { DJradioWrapper } from "./style"
import { useAppDispatch } from "@/store"
import { getDjCatelistAction, getHomeDjCateRecomAction } from "./store"
import RadioHeader from "./c-cpns/header-radio"
import { Outlet } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const DJradio: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getDjCatelistAction())
    dispatch(getHomeDjCateRecomAction())
  }, [])
  return (
    <DJradioWrapper>
      <div className="content wrapper_v2">
        <RadioHeader />
        <Outlet />
      </div>
    </DJradioWrapper>
  )
}

export default memo(DJradio)
