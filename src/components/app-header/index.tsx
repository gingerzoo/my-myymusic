import React, { memo } from "react"
import type { ReactNode, FC } from "react"
import { HeaderWrapper, LeftWrapper, RightWrapper } from "./style"
import { Link, NavLink } from "react-router-dom"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"

//这里不能像对待模块那样加括号，为啥呢
import headerTitles from "@/assets/data/appHeader.json"

interface IProps {
  children?: ReactNode
}

//因为头部有的点击过后是路由匹配，有的是链接跳转，所以需要分情况讨论
function createItem(item: any) {
  if (item.type === "path") {
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    )
  } else {
    return (
      <a href={item.link} target="blank">
        {item.title}
      </a>
    )
  }
}

const AppHeader: FC<IProps> = (props) => {
  return (
    <HeaderWrapper>
      <div className="header wrapper_v1">
        <LeftWrapper>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerTitles.map((item, index) => {
              return (
                <div key={index} className="select-item sprite_01">
                  {createItem(item)}
                </div>
              )
            })}
          </div>
        </LeftWrapper>
        <RightWrapper>
          <Input
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            className="input"
          />

          {/* 本来span元素是不能直接设置宽高的，但是由于父级元素设置了flex属性so...... */}
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </RightWrapper>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
