import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { NavWrapper } from "./style"
import { dicoverMenu } from "@/assets/data/local_data"
import { NavLink } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const NavHeader: FC<IProps> = (props) => {
  return (
    <NavWrapper>
      <div className="nav wrapper_v1">
        {dicoverMenu.map((item, index) => {
          return (
            <div key={index} className="nav-item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavHeader)
