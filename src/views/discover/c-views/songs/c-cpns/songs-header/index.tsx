import React, { memo, useState, useCallback, useRef } from "react"

import type { ReactNode, FC } from "react"
import { SongHDWrapper } from "./style"
import ICategory from "../songs-category/index"
import { useAppDispatch, useAppSelector } from "@/store"
import { getSongCateListAction } from "../../store"

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

  const cateRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  window.onclick = function (event) {
    // !(event.target as HTMLElement).classList.contains("category-btn")
    if (
      cateRef.current &&
      !cateRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).classList.contains("category-btn")
    ) {
      setShowCate(false)
      console.log((event.target as HTMLElement).classList)
      console.log(
        (event.target as HTMLElement).classList.contains("category-btn")
      )
    }
  }
  //   console.log(ShowCate)

  function hotBtnClick() {
    dispatch(getSongCateListAction({ page: 1, order: "hot" }))
  }

  return (
    <SongHDWrapper>
      <div className="header-left">
        <h3 className="title">{curCategory}</h3>
        <a
          className="category sprite_button category-btn"
          onClick={(e) => setShowCate(!ShowCate)}
        >
          <span className="choose-all">选择全部</span>
          <em className="sprite_icon2"></em>
        </a>
        <div className="category-box" ref={cateRef}>
          {ShowCate && <ICategory closeShow={closeShow} />}
        </div>
      </div>
      <div className="header-right sprite_button2">
        <a className="hot-btn" onClick={hotBtnClick}>
          热门
        </a>
      </div>
    </SongHDWrapper>
  )
}

export default memo(SongHeader)
