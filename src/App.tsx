import React, { Suspense } from "react"
// import { useSelector } from "react-redux"
import { useRoutes } from "react-router-dom"
import AppFooter from "./components/app-footer"
import AppHeader from "./components/app-header"
import routes from "./router"

function App() {
  return (
    <div className="app">
      <AppHeader />

      {/* 路由占位，一旦匹配到路径，相应组件在这里展示 */}
      <div className="main">
        <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
      </div>
      <AppFooter />
    </div>
  )
}

export default App
