import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ItemWrapper } from "./style"
import { formatCount, formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: any
  width: number
}

const SongItem: FC<IProps> = (props) => {
  const { itemData, width } = props
  const picUrl = itemData.picUrl || itemData.coverImgUrl
  return (
    <ItemWrapper width={width}>
      <div className="top">
        {/* 这里图片地址相当于加了query参数，这个param属性是为了指定图片的大小为140x140 因为原本图片很大，我们直接从服务器获取的话不仅会影响首屏渲染速度还会减少性能损耗 */}
        <img src={formatImgUrl(picUrl, width)} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <div>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </div>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>{itemData.name}</span>
        {itemData.accountId && <span className="sprite_icon2 sign_icon"></span>}
      </div>
    </ItemWrapper>
  )
}

export default memo(SongItem)
