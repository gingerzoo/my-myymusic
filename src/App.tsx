import React, { Suspense, useEffect } from "react"
// import { useSelector } from "react-redux"
import { useRoutes } from "react-router-dom"
import AppFooter from "./components/app-footer"
import AppHeader from "./components/app-header"
import routes from "./router"
import { useAppDispatch } from "./store"
import PlayBar from "./views/player/play-bar"
import { getSongDetAction } from "./views/player/store/player"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getSongDetAction(1994863874))
  })
  return (
    <div className="app">
      <AppHeader />

      {/* 路由占位，一旦匹配到路径，相应组件在这里展示 */}
      <div className="main">
        <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
      </div>
      <AppFooter />
      <PlayBar />
    </div>
  )
}

export default App
