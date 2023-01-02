import Artist from "@/views/artist"
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

const ArtistAlbum = React.lazy(
  () => import("@/views/artist/c-cpns/album-artist")
)
const ArtistMv = React.lazy(() => import("@/views/artist/c-cpns/mv-artist"))
const ArtistDesc = React.lazy(() => import("@/views/artist/c-cpns/desc-artist"))
const ArtistTopHot = React.lazy(() => import("@/views/artist/c-cpns/top-hot"))
const RadioCate = React.lazy(
  () => import("@/views/discover/c-views/DJradio/c-cpns/category")
)
const RadioHome = React.lazy(
  () => import("@/views/discover/c-views/DJradio/c-cpns/home-radio")
)

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
        path: "/discover",
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
        path: "djradio",
        element: <DJradio />,
        children: [
          {
            path: "/discover/djradio",
            element: <RadioHome />
          },
          {
            path: "category",
            element: <RadioCate />
          }
        ]
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
  },
  {
    path: "/artist",
    // element: <Navigate to="/artist/tophot" />,
    element: <Artist />,
    children: [
      {
        path: "/artist",
        element: <ArtistTopHot />
      },
      {
        path: "album",
        element: <ArtistAlbum />
      },
      {
        path: "mv",
        element: <ArtistMv />
      },
      {
        path: "desc",
        element: <ArtistDesc />
      }
    ]
  }
]

export default routes
