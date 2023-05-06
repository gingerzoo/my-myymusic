import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { CategoryWrapper } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/store"
import classNames from "classnames"
import {
  changeCurCateAction,
  getCategoryAction,
  getSongCateListAction
} from "../../store"
import { getSongCategoryList } from "../../service"

interface IProps {
  children?: ReactNode
  closeShow: () => void
}

const ICategory: FC<IProps> = (props) => {
  const { closeShow } = props
  const { curCategory, category, curPage } = useAppSelector((state) => ({
    curCategory: state.songCatList.curCategory,
    category: state.songCatList.category,
    curPage: state.songCatList.currentPage
  }))

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function changeCateHandle(cate: string) {
    navigate(`/discover/songs?cat=${cate}`)
    dispatch(changeCurCateAction(cate))
    dispatch(getSongCateListAction({ page: curPage }))
    closeShow()
  }
  return (
    <CategoryWrapper>
      <div className="cate-content">
        <div className="cate-hd cate_board">
          <i className="traicon sprite_icon"></i>
        </div>
        <div className="cate-bd cate_board">
          <h3 className="cate-title">
            <span
              className="sprite_button2"
              onClick={() => {
                changeCateHandle("全部")
              }}
            >
              全部风格
            </span>
          </h3>
          {category.map((item, index) => {
            return (
              <dl key={item.name} className={classNames(`dl-${index + 1}`)}>
                {/* "sprite_icon2 u-icon u-icon-1" */}
                <dt>
                  <i
                    className={classNames(
                      "sprite_icon2",
                      "u-icon",
                      `u-icon-${index + 1}`
                    )}
                  ></i>
                  <span> {item.name}</span>
                </dt>
                <dd>
                  {item.subs.map((item: any, index: number) => {
                    return (
                      <div
                        key={item.name}
                        className={classNames(`dd-${index + 1}`)}
                      >
                        <span
                          className="subs-item"
                          onClick={() => {
                            changeCateHandle(item.name)
                          }}
                        >
                          {item.name}
                        </span>
                        <span className="divider">|</span>
                      </div>
                    )
                  })}
                </dd>
              </dl>
            )
          })}
        </div>
        <div className="cate-ft cate_board"></div>
      </div>
    </CategoryWrapper>
  )
}

export default memo(ICategory)
