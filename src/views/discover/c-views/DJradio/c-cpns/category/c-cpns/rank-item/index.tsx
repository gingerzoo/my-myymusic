import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { RankItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: {
    picUrl: string
    id: number
    name: string
    programCount: number
    subCount: number

    dj: {
      nickname: string
      avatarDetail?: {
        identityIconUrl: string
      }
    }
  }
}

const RankItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <RankItemWrapper>
      <img src={formatImgUrl(itemData.picUrl, 120)}></img>
      <div className="radio">
        <h3 className="title">{itemData.name}</h3>
        <p className="radio-name">
          <i className="radio-icon sprite_icon2"></i>
          <span>{itemData.dj.nickname}</span>
          {itemData.dj.avatarDetail?.identityIconUrl && (
            <img
              className="avatarDetail"
              src={formatImgUrl(itemData.dj.avatarDetail!.identityIconUrl, 13)}
            ></img>
          )}
        </p>
        <p className="radio-info">
          <span className="programCount">共{itemData.programCount}期</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="subCount">订阅{itemData.subCount}次</span>
        </p>
      </div>
    </RankItemWrapper>
  )
}

export default memo(RankItem)
