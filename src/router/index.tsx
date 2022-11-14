import React from "react"
import { RouteObject, Navigate } from "react-router-dom"

//提问：懒加载的作用是？？？？
//这算是一种优化方案
const Discover = React.lazy(() => import("@/views/discover"))
const Mine = React.lazy(() => import("@/views/mine"))
const Download = React.lazy(() => import("@/views/download"))
const Focus = React.lazy(() => import("@/views/focus"))
const Recommend = React.lazy(() => import("@/views/discover/c-views/recommend"))
const Albums = React.lazy(() => import("@/views/discover/c-views/albums"))

const DJradio = React.lazy(() => import("@/views/discover/c-views/DJradio"))
const Ranking = React.lazy(() => import("@/views/discover/c-views/ranking"))
const Singers = React.lazy(() => import("@/views/discover/c-views/singers"))
const Songs = React.lazy(() => import("@/views/discover/c-views/songs"))

/* import Discover from "@/views/discover"
import Mine from "@/views/mine"
import Download from "@/views/download"
import Focus from "@/views/focus"
import Recommend from "@/views/discover/c-cpns/recommend"
import Albums from "@/views/discover/c-cpns/albums"
import DJradio from "@/views/discover/c-cpns/DJradio"
import Ranking from "@/views/discover/c-cpns/ranking"
import Singers from "@/views/discover/c-cpns/singers"
import Songs from "@/views/discover/c-cpns/songs"*/

//RouteObject[]是路由的类型哦！第一次见！好新鲜
//路由表
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        /* 这里这个path要么写全："/discover/recommend" 要么只写recommend 但是不能写/recommend */
        path: "recommend",
        element: <Recommend />
      },
      {
        path: "ranking",
        element: <Ranking />
      },
      {
        path: "songs",
        element: <Songs />
      },
      {
        path: "DJradio",
        element: <DJradio />
      },
      {
        path: "singers",
        element: <Singers />
      },
      {
        path: "Albums",
        element: <Albums />
      }
    ]
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/focus",
    element: <Focus />
  }
]

export default routes
