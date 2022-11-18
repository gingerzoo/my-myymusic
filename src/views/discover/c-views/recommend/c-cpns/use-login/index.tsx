import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { LoginWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = (props) => {
  return (
    <LoginWrapper className="sprite_02">
      <p className="note">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a className="sprite_02 enter-default" href="#">
        用户登录
      </a>
    </LoginWrapper>
  )
}

export default memo(UserLogin)
