import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { HeaderV2Wrapper } from "./style"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
  title: string
  moreLink?: string
  moreText?: string
}

/*
推荐模块右侧部分的局部头部
 */

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreLink, moreText } = props
  return (
    <HeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreLink && moreText && <Link to={moreLink}>{moreText}&gt;</Link>}
    </HeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
