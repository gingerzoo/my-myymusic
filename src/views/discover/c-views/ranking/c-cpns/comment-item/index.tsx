import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { CommentItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: {
    user: {
      userId: number
      nickname: string
      avatarUrl: string
      vipRights: {
        associator?: {
          iconUrl: string
        }
        musicPackage?: {
          iconUrl: string
        }
      }
      avatarDetail: any
    }
    timeStr: string
    likedCount: number
    content: string
    contentId: number
  }
}

const CommentItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { nickname, avatarUrl, vipRights } = itemData.user
  return (
    <CommentItemWrapper>
      <img
        src={formatImgUrl(itemData.user.avatarUrl, 50)}
        className="avatar"
      ></img>

      <div className="comment-detail">
        <div className="user-info">
          <a className="user-name">{itemData.user.nickname}</a>
          {vipRights?.musicPackage && (
            <img src={vipRights.musicPackage.iconUrl}></img>
          )}
          {vipRights?.associator && (
            <img src={vipRights.associator.iconUrl} className="vip-icon"></img>
          )}
          :&nbsp;&nbsp;{itemData.content}
        </div>
        <div className="bottom-info">
          <span className="time">{itemData.timeStr}</span>
          <div className="favor-comm">
            <a className="sprite_icon3 like-icon"></a>
            {itemData.likedCount != 0 && <span>({itemData.likedCount})</span>}
            <span className="divider">|</span>
            <a>评论</a>
          </div>
        </div>
      </div>
    </CommentItemWrapper>
  )
}

export default memo(CommentItem)
