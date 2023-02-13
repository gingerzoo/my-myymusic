import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { MvWrapper } from "./style"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "@/store"
import { getMvDetail } from "./service"
import { getMvDetailAction } from "./store"
import MvPlay from "./c-cpns/mv-play"

interface IProps {
  children?: ReactNode
}

const Mv: FC<IProps> = (props) => {
  const [para, setPar] = useSearchParams()
  const id = Number(para.get("id"))

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMvDetailAction(id))
  })
  return (
    <MvWrapper>
      <div className="content wrapper_v2 wrap4">
        <div className="left">
          <MvPlay />
        </div>
        <div className="right"></div>
      </div>
    </MvWrapper>
  )
}

export default memo(Mv)
