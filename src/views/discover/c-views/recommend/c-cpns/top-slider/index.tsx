import React, { memo, useEffect, useRef, useState } from "react"

import type { ReactNode, FC, ElementRef } from "react"
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style"
import { Carousel } from "antd"

import { useAppSelector } from "@/store"
import { AnyArray } from "immer/dist/internal"
import { url } from "inspector"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
}

const TopSlider: FC<IProps> = (props) => {
  //很好，忘光了这个结构，尤其是回调函数中要转化为一个对象
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }))

  /* ts与react结合，用到useRef时，需要传入一个泛型！！！ */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const [curIndex, setCurIndex] = useState(0)

  let curBgImg = banners[curIndex]?.imageUrl
  function beforeChangeHandle(from: number, to: number) {
    setCurIndex(to)

    if (curBgImg) {
      curBgImg = curBgImg + "?imageView&blur=40x20"
    }

    // banners[curIndex] && banners[curIndex].imageUrl + "?imageView&blur=40x20"
  }

  function btnClickHandle(isLeft = true) {
    const carousel = bannerRef.current
    isLeft ? carousel?.prev() : carousel?.next()
  }

  return (
    /* 该死这里给组件传参怎么一直报错呢 */
    // style={{ background: `url("${curBgImg}") center center / 6000px` }}
    // bgImg={curBgImg}
    <BannerWrapper
      style={{ background: `url("${curBgImg}") center center / 6000px` }}
    >
      <div className="slider wrapper_v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            effect="fade"
            dots={false}
            beforeChange={beforeChangeHandle}
          >
            {banners.map((item, index) => {
              return (
                <div key={index} className="slider-item">
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames("dot-item", {
                      active: index === curIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>

        <BannerRight></BannerRight>
        {/* <BannerControl>
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl> */}
        <button className="btn left" onClick={() => btnClickHandle()}></button>
        <button
          className="btn right"
          onClick={() => btnClickHandle(false)}
        ></button>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopSlider)
