import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { SingerAlphWrapper } from "./style"
import { useAppSelector } from "@/store"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const SingerAlph: FC<IProps> = (props) => {
  const { singerList } = useAppSelector((state) => ({
    singerList: state.singerCatList.singerList
  }))

  const navigate = useNavigate()

  function navigateTo(path: string) {
    navigate(path)
  }

  return (
    <SingerAlphWrapper>
      <ul className="singer-list">
        {singerList.slice(10).map((item) => {
          return (
            <li className="singer-item" key={item.id}>
              <a
                className="wrapno"
                onClick={() => navigateTo(`/artist?id=${item.id}`)}
              >
                {item.name}
              </a>
              {item.accountId && <a className="sprite_icon2 sign_icon"></a>}
            </li>
          )
        })}
      </ul>
    </SingerAlphWrapper>
  )
}

export default memo(SingerAlph)
