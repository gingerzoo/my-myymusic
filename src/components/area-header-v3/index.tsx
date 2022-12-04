import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { HeaderV3Wrapper } from "./style"

interface IProps {
  children?: ReactNode
  title: string
  submessage: string
  moreText?: number
}

const AreaHeaderV3: FC<IProps> = (props) => {
  const { title, submessage, moreText } = props
  return (
    <HeaderV3Wrapper>
      <h3>
        {title}
        <span className="itemCount">{submessage}</span>
      </h3>

      {moreText && (
        <div className="playCount">
          播放：<strong>{moreText}</strong>次
        </div>
      )}
    </HeaderV3Wrapper>
  )
}

export default memo(AreaHeaderV3)
