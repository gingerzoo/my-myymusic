import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { AlbumItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData?: any
}

const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumItemWrapper>
      <div className="al-img">
        <img src={formatImgUrl(itemData.picUrl, 100)} alt={itemData.name} />
        <a className="cover sprite_cover"></a>
      </div>
      {itemData.length > 0 && (
        <div className="info">
          <p className="al-name wrapno">{itemData.name}</p>
          <span className="artist wrapno">{itemData.artist.name}</span>
        </div>
      )}
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
