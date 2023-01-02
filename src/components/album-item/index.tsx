import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { AlbumItemWrapper } from "./style"
import { formatDateTime, formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData?: any
  singleArtist: boolean
  picWidth: number
  coverWidth: number
  coverPosition: string
  bigPlayIcon: boolean
}

const AlbumItem: FC<IProps> = (props) => {
  const {
    itemData,
    singleArtist,
    picWidth,
    coverWidth,
    coverPosition,
    bigPlayIcon
  } = props
  return (
    <AlbumItemWrapper
      picWidth={picWidth}
      coverWidth={coverWidth}
      singleArtist={singleArtist}
      coverPosition={coverPosition}
      bigPlayIcon={bigPlayIcon}
    >
      {itemData && (
        <div>
          <div className="al-img">
            <img
              src={formatImgUrl(itemData.picUrl, picWidth)}
              alt={itemData.name}
            />

            <a className="cover sprite_cover"></a>
            <a className="sprite_icon play-icon"></a>
          </div>
          <div className="info">
            <p className="al-name wrapno">{itemData.name}</p>
            {singleArtist ? (
              <p className="publishTime wrapno">
                {formatDateTime(itemData.publishTime, true)}
              </p>
            ) : (
              <p className="artist wrapno">{itemData.artist.name}</p>
            )}
          </div>
        </div>
      )}
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
