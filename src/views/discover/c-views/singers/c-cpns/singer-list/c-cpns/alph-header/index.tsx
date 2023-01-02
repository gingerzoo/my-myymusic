import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { AlphHeaderWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import { getSingerList } from "@/views/discover/c-views/recommend/service/recommend"
import { changeCurAlphAction, getSingerListAction } from "../../../../store"
import classNames from "classnames"
import { alphGen } from "@/utils/alph-gen"

interface IProps {
  children?: ReactNode
}

const AlphHeader: FC<IProps> = (props) => {
  const { alph } = useAppSelector((state) => ({
    alph: state.singerCatList.alph
  }))
  const alphList = alphGen()

  const dispatch = useAppDispatch()

  function alphBtnHandle(initial: any) {
    //  alph = initial
    dispatch(changeCurAlphAction(initial))
    dispatch(getSingerListAction())
  }
  return (
    <AlphHeaderWrapper>
      {alphList.map((item, index) => {
        return (
          <li
            key={item.name}
            className={classNames("alph-item", {
              isActive: alph == item.value
            })}
            onClick={() => alphBtnHandle(item.value)}
          >
            {item.name}
          </li>
        )
      })}
    </AlphHeaderWrapper>
  )
}

export default memo(AlphHeader)
