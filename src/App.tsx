import React, { Suspense } from "react"
import { useSelector } from "react-redux"
import { useRoutes, Link } from "react-router-dom"
import routes from "./router"
import { changeMessageAction } from "./store/modules/text"
import { useAppSelector, useAppDispatch, appShallowEqual } from "./store"

function App() {
  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }))

  const dispatch = useAppDispatch()

  function buttonClickHandle() {
    dispatch(changeMessageAction("ahhhhhhh"))
  }

  return (
    <div className="app">
      <Link to="/discover">发现</Link>
      <Link to="/mine">我的</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载</Link>
      {/* fallback 这个参数真难记住 其实后面也可以传组件
      快去查suspense!!!!!!
       */}

      {/* 路由占位，一旦匹配到路径，相应组件在这里展示 */}
      <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
      <h3>当前计数</h3>
      <span>{count}</span>
      <h3>message</h3>
      <button onClick={buttonClickHandle}>点我改变message</button>
      <span>{message}</span>
    </div>
  )
}

export default App
