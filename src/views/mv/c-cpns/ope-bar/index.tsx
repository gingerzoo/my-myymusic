import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { OpeBarWrapper } from "./style"
import { useAppSelector } from "@/store"

interface IProps {
  children?: ReactNode
}

const OpeBar: FC<IProps> = (props) => {
  const { detail } = useAppSelector((state) => ({
    detail: state.mv.detail
  }))
  return (
    <OpeBarWrapper>
      <a className="favor icon sprite_button">
        <i className="sprite_button">
          <em className="sprite_button"></em>({detail.commentCount})
        </i>
      </a>
      <a className="subsribe icon sprite_button">
        <i className="sprite_button">({detail.subCount})</i>
      </a>
      <a className="share icon sprite_button ">
        <i className="sprite_button">({detail.shareCount})</i>
      </a>
    </OpeBarWrapper>
  )
}

export default memo(OpeBar)
