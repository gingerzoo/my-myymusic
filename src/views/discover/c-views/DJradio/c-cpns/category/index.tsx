import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { RadioCateWrapper } from "./style"
import { useSearchParams } from "react-router-dom"
import RadioRecom from "./c-cpns/recom-radio"
import RadioRanking from "./c-cpns/rank-radio"
import { useDispatch } from "react-redux"
import { getDjCateRecomAction } from "../../store"
import { useAppDispatch } from "@/store"

interface IProps {
  children?: ReactNode
}

const RadioCate: FC<IProps> = (props) => {
  const [params, setParams] = useSearchParams()
  const id = params.get("id")
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getDjCateRecomAction())
  }, [])
  return (
    <RadioCateWrapper>
      <RadioRecom />
      <RadioRanking />
    </RadioCateWrapper>
  )
}

export default memo(RadioCate)
