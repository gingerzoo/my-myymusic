import React, { memo, useState } from "react"

import type { ReactNode, FC } from "react"
import { ArtistNavWrapper } from "./style"
import { NavLink } from "react-router-dom"
import { artistInfo } from "@/assets/data/local_data"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
}

const ArtistNav: FC<IProps> = (props) => {
  const [curIndex, setCurIndex] = useState(0)
  return (
    <ArtistNavWrapper className="tab">
      {artistInfo.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                classNames("tab", { myActive: isActive })
              }
              onClick={() => setCurIndex(index)}
            >
              <span
                className={classNames("tab", { redActive: index == curIndex })}
              >
                {item.title}
              </span>
            </NavLink>
          </li>
        )
      })}
    </ArtistNavWrapper>
  )
}

export default memo(ArtistNav)
