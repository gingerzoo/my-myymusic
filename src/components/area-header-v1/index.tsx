import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { HeaderV1Wrapper } from "./style"
import { Link, NavLink, useNavigate } from "react-router-dom"
import {
  changeCurCateAction,
  getSongCateListAction
} from "@/views/discover/c-views/songs/store"
import { useAppDispatch } from "@/store"

/*
推荐模块左侧部分的局部头部
 */
//定义接收参数的类型
interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { title = "默认标题", keywords = [], moreLink = "/" } = props

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function titleItemClick(item: string) {
    dispatch(changeCurCateAction(item))
    dispatch(getSongCateListAction({ page: 1 }))
    navigate(`/discover/songs?cur=${item}`)
  }
  return (
    <HeaderV1Wrapper>
      <div className="left">
        <h3 className="title sprite_02">{title}</h3>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div key={item} className="title-item">
                <div
                  className="text"
                  onClick={() => {
                    titleItemClick(item)
                  }}
                >
                  {item}
                </div>

                {/* 最后一根竖线不显示 */}
                {index < keywords.length - 1 && <span className="line">|</span>}
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="right"
        onClick={() => {
          dispatch(changeCurCateAction("全部"))
        }}
      >
        {/* <Link to={moreLink}>更多</Li> */}

        <Link to={moreLink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
