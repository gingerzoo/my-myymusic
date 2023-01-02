import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { formatImgUrl } from "@/utils/format"
import { SingerItemWrapper } from "./style"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
  itemData: {
    img1v1Url: string
    name: string
    accountId?: any
    id: string
  }
}

const SingerItem: FC<IProps> = (props) => {
  const { itemData } = props
  const navigate = useNavigate()

  function navigateTo(path: string) {
    navigate(path)
  }
  return (
    <SingerItemWrapper>
      <div className="pic">
        <img src={formatImgUrl(itemData.img1v1Url, 130)}></img>
        <div className="cover sprite_cover"></div>
      </div>
      <p className="info">
        <span
          className="name"
          onClick={() => navigateTo(`/artist?id=${itemData.id}`)}
        >
          {itemData.name}
        </span>
        {itemData.accountId && <i className="sprite_icon2 sign_icon"></i>}
      </p>
    </SingerItemWrapper>
  )
}

export default memo(SingerItem)
