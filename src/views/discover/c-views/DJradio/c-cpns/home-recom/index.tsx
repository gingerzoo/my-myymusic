import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { HomeRecomWrapper } from "./style"
import { useAppSelector } from "@/store"
import RadioBox from "./c-cpns/radio-box"

interface IProps {
  children?: ReactNode
}

const RecomHome: FC<IProps> = (props) => {
  const { homeCate } = useAppSelector((state) => ({
    homeCate: state.djRadio.homeCate
  }))

  return (
    <HomeRecomWrapper>
      {homeCate.map((item, index) => {
        return <RadioBox ItemData={item} key={index} title={item[0].category} />
      })}
    </HomeRecomWrapper>
  )
}

export default memo(RecomHome)
