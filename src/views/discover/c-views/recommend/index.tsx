import React, { memo, useEffect, useState } from "react"
// import { lxRequest1 } from "@/services"

import type { ReactNode, FC } from "react"
import { RecomWrapper } from "./style"
import { useAppDispatch } from "@/store"
import { getRecommendAction } from "./store/recommend"
import TopSlider from "./c-cpns/top-slider"

interface IProps {
  children?: ReactNode
}

interface BannerType {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
}

const Recommend: FC<IProps> = () => {
  /*   这里不加泛型的话banner的类型为never[]
  const [banner, setBanner] = useState<BannerType[]>([])
  测试网络请求
  useEffect(() => {
    lxRequest1
      .request({
        url: "/banner"
      })
      .then((res) => {
        setBanner((res as any).banners)
        // console.log(res)
      })
  }, []) */

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecommendAction())
  }, [])

  return (
    <RecomWrapper>
      <TopSlider />
      {/*  {banner.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })} */}
      <div className="content wrapper_v2">
        <div className="content-left">left</div>
        <div className="content-right">right</div>
      </div>
    </RecomWrapper>
  )
}

export default memo(Recommend)
