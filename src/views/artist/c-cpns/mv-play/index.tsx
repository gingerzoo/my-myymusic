import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { MvPlayWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const MvPlay: FC<IProps> = (props) => {
  return (
    <MvPlayWrapper>
      <video width="640" height="360" controls src="" />
    </MvPlayWrapper>
  )
}

export default memo(MvPlay)
