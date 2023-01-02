import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ArtistHeaderWrapper } from "./style"
import { useAppSelector } from "@/store"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const ArtistHeader: FC<IProps> = (props) => {
  const { artistInfo, detail } = useAppSelector((state) => ({
    artistInfo: state.artist.info,
    detail: state.artist.detail
  }))
  return (
    <ArtistHeaderWrapper>
      <div className="artist-info">
        <h2 className="name">{artistInfo?.name}</h2>
        <h3 className="alias">{artistInfo?.alias.join()}</h3>
      </div>
      <div className="artist-pic">
        <img src={artistInfo?.picUrl} />
        <div className="mask ban_mask"></div>

        {detail?.user?.userId && (
          <a className="artist-home icon sprite_icon"> </a>
        )}
        <a className="artist-sub icon sprite_icon"></a>
      </div>
    </ArtistHeaderWrapper>
  )
}

export default memo(ArtistHeader)
