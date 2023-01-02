import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RadioHomeWrapper } from "./style"
import ProgramBox from "./c-cpns/program-box"
import RankingBox from "./c-cpns/rank-box"
import RecomHome from "../home-recom/index"

interface IProps {
  children?: ReactNode
}

const RadioHome: FC<IProps> = (props) => {
  return (
    <RadioHomeWrapper>
      <div className="box1">
        <ProgramBox />
        <RankingBox />
      </div>
      <div className="box2">
        <RecomHome />
      </div>
    </RadioHomeWrapper>
  )
}

export default memo(RadioHome)
