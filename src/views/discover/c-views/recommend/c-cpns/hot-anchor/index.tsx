import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { AnchorWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"
import { hotRadios } from "@/assets/data/local_data"
import { formatImgUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = (props) => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchor-list">
        {hotRadios.map((item) => {
          return (
            <div key={item.name} className="anchor-item">
              <img src={formatImgUrl(item.picUrl, 40)}></img>
              <div className="info">
                <a className="anchor">{item.name}</a>
                <p className="desc wrapno">{item.position}</p>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
