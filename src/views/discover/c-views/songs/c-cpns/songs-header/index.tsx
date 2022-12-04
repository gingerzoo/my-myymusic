import React, { memo, useState, useCallback } from "react"

import type { ReactNode, FC } from "react"
import { SongHDWrapper } from "./style"
import ICategory from "../songs-category/index"
import { useAppSelector } from "@/store"

interface IProps {
  children?: ReactNode
}

const SongHeader: FC<IProps> = (props) => {
  const [ShowCate, setShowCate] = useState(false)
  const { curCategory } = useAppSelector((state) => ({
    curCategory: state.songCatList.curCategory
  }))

  const closeShow = useCallback(() => {
    setShowCate(false)
  }, [])
  return (
    <SongHDWrapper>
      <div className="header-left">
        <h3 className="title">{curCategory}</h3>
        <a className="category sprite_button">
          <span onClick={(e) => setShowCate(!ShowCate)}>选择全部</span>
          <em className="sprite_icon2"></em>
        </a>
        {ShowCate && <ICategory closeShow={closeShow} />}
      </div>
      <div className="header-right sprite_button2">
        <a className="hot-btn">热门</a>
      </div>
    </SongHDWrapper>
  )
}

export default memo(SongHeader)
