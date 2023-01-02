import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { ProgramItemWrapper } from "./style"
import { formatImgUrl } from "@/utils/format"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
  itemData: {
    name: string
    id: number
    coverUrl: string
    blurCoverUrl: string
    radio: {
      category: string
      categoryId: number
    }
    dj: {
      nickname: string
      brand: string
    }
  }
}

const ProgramItem: FC<IProps> = (props) => {
  const { itemData } = props
  //   const {
  //     mainSong = {},
  //     mainSong: { name, id },
  //     album = {},
  //     album: { blurPicUrl, picUrl },
  //     radio = {},
  //     radio: { category },
  //     dj = {},
  //     dj: { nickname, brand }
  //   } = itemData
  return (
    <ProgramItemWrapper>
      <div className="left">
        <img src={formatImgUrl(itemData.blurCoverUrl, 40)}></img>

        <div className="info wrapno">
          <h3 className="name wrapno">{itemData.name}</h3>
          {itemData.dj && <p className="brand wrapno">{itemData.dj!.brand}</p>}
        </div>
      </div>
      <div className="right">
        {itemData.radio && (
          <Link to={`category?id=${itemData.radio.categoryId}`}>
            {itemData.radio.category}
          </Link>
        )}
      </div>
    </ProgramItemWrapper>
  )
}

export default memo(ProgramItem)
