import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "normalize.css"
import { Provider } from "react-redux"

import "@/assets/css/index.less"
import { ThemeProvider } from "styled-components"
import App from "@/App"
import store from "./store"
import theme from "./assets/theme"
//将网络请求添加到webpack依赖图中
// import "./services/modules/test"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
//如何让界面主题变成哀悼主题！！！！！！！！！！
// document.documentElement.style.filter = "grayscale(100%)"

root.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
)
