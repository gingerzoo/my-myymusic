import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "normalize.css"
import { Provider } from "react-redux"

import "@/assets/css/index.less"
import App from "@/App"
import store from "./store"
//将网络请求添加到webpack依赖图中
// import "./services/modules/test"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
