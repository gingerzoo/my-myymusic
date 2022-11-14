import React, { memo, Suspense } from "react"

import type { ReactNode, FC } from "react"

import { Link, Outlet } from "react-router-dom"
import NavHeader from "./c-cpns/nav"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      {/* 这里不加一级路由可以吗，我记得有个地方可以删除来着 =>是在路由的子级路由中！可以不写父级路由 */}
      {/* 回复上面的，可以  但记住如果是前面加了斜杠的话意思是直接从斜杠搜索搜索，所以这里和路由表的命名方式是一样的 */}
      {/* <Link to="recommend">推荐</Link>
      <Link to="ranking">排行榜</Link>
      <Link to="songs">歌单</Link>
      <Link to="/discover/djradio">主播电台</Link>
      <Link to="/discover/singers">歌手</Link>
      <Link to="/discover/albums">新碟上架</Link> */}

      {/* 快去给我看outlet 插槽？指定子级路由呈现的位置 */}
      <NavHeader />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
