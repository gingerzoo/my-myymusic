import React, { memo, useRef, ElementRef, useState } from "react"

import type { ReactNode, FC } from "react"
import { CateImageWrapper, RadioHeaderWrapper } from "./style"
import { Carousel } from "antd"
import { useAppDispatch, useAppSelector } from "@/store"
import classNames from "classnames"
import { NavLink, useNavigate } from "react-router-dom"
import { changeCurCateAction, getDjCateRecomAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const PageSize = 18

const RadioHeader: FC<IProps> = (props) => {
  const { categories, curCate } = useAppSelector((state) => ({
    categories: state.djRadio.categories,
    curCate: state.djRadio.curCate
  }))
  const page = Math.ceil(categories.length / PageSize)

  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  //   const nextRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  //   const [nowIndex, setIndex] = useState(0)

  function nextClickHandle(IsNext = true) {
    const carousel = carouselRef.current

    IsNext ? carousel!.next() : carousel!.prev()
  }

  //   function beforeChange(from: number, to: number) {
  //     if (from == 0) prevRef.current!.style.pointerEvents = "none"
  //     else if (from == 1) nextRef.current!.style.pointerEvents = "none"
  //     else {
  //       prevRef.current!.style.pointerEvents = "auto"
  //       nextRef.current!.style.pointerEvents = "auto"
  //     }
  //     console.log(to)
  //   }

  function cateBtnHandle(id: number) {
    const path = `category?id=${id}`
    navigate(path)
    dispatch(changeCurCateAction(id))
    dispatch(getDjCateRecomAction())
  }
  return (
    <RadioHeaderWrapper>
      <div className="carousel-content">
        <Carousel
          dots={{ className: "dots" }}
          ref={carouselRef}
          //   beforeChange={beforeChange}
          //   afterChange={afterChange}
        >
          {Array(page)
            .fill(0)
            .map((item, index) => {
              return (
                // page-item${index + 1} page
                <ul
                  key={index}
                  className={classNames("page", `page-item${index + 1}`)}
                >
                  {categories
                    .slice(index * PageSize, (index + 1) * PageSize)
                    .map((item) => {
                      return (
                        <li
                          key={item.id}
                          className={classNames("cate-item radio_bg", {
                            "link-active": item.id == curCate
                          })}
                          onClick={() => cateBtnHandle(item.id)}
                        >
                          <CateImageWrapper
                            className="image"
                            imgUrl={item.picWebUrl}
                          ></CateImageWrapper>
                          <h3 className="cate-name">{item.name}</h3>
                        </li>
                      )
                    })}
                </ul>
              )
            })}
        </Carousel>
        <div
          className="arrow-left radio_slide arrow"
          onClick={() => nextClickHandle(false)}
        ></div>
        <div
          className="arrow-right radio_slide arrow"
          onClick={() => nextClickHandle()}
        ></div>
      </div>
    </RadioHeaderWrapper>
  )
}

export default memo(RadioHeader)
