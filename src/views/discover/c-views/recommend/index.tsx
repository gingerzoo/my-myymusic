import React, { memo, useEffect, useState } from "react"
// import { lxRequest1 } from "@/services"

import type { ReactNode, FC } from "react"
import { RecomWrapper } from "./style"
import { useAppDispatch } from "@/store"
import {
  /*   getBannerAction,
  getHotRecommendAction,
  getNewAlbumAction,
  getSetSingerAction, */
  getRecommendAction,
  getTopRankAction
} from "./store/recommend"

import TopSlider from "./c-cpns/top-slider"

import HotRecommend from "./c-cpns/hot-recommend"
import NewAlbums from "./c-cpns/new-albums"
import TopRanking from "./c-cpns/top-ranking"
import UseLogin from "./c-cpns/use-login"
import SettleSinger from "./c-cpns/settle-singer"
import HotAnchor from "./c-cpns/hot-anchor"

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
    /*  dispatch(getBannerAction())
    dispatch(getHotRecommendAction())
    dispatch(getNewAlbumAction())
    dispatch(getSetSingerAction()) */
    dispatch(getTopRankAction())
    dispatch(getRecommendAction())

    // dispatch(getRecommendAction())
  }, [])

  return (
    <RecomWrapper>
      <TopSlider />
      {/*  {banner.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })} */}
      <div className="content wrapper_v2">
        <div className="content-left">
          <HotRecommend />
          <NewAlbums />
          <TopRanking />
        </div>
        <div className="content-right">
          <UseLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecomWrapper>
  )
}

export default memo(Recommend)
