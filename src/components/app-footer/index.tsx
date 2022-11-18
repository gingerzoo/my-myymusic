import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { FooterWrapper } from "./style"
import { footerLink, footerClause } from "@/assets/data/local_data"

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = (props) => {
  return (
    <FooterWrapper>
      <footer className="wrapper_v2">
        <ul className="enter">
          {footerLink.map((item) => {
            return (
              <li key={item.title} className="unit">
                <a className="footer-logo foot_enter_new2" href={item.link}></a>
                <span className="title">{item.title}</span>
              </li>
            )
          })}
        </ul>
        <div className="copyright">
          <p className="right p1">
            {footerClause.map((item) => {
              return (
                <div key={item.title} className="item">
                  <a href={item.link}>{item.title}</a>
                  <span className="line">|</span>
                </div>
              )
            })}
          </p>
          <p className="right p2">
            <a href="https://jubao.163.com/">廉政举报</a>
            <span> 不良信息举报邮箱: 51jubao@service.netease.com</span>
            <span>客服热线:95163298</span>
          </p>
          <p className="right p3">
            <span>互联网宗教信息服务许可证: 浙&nbsp;(2022)&nbsp;0000120</span>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              className="a1"
            >
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              className="badge police-badge"
            >
              浙公网安备 33010902002564号
            </a>
          </p>
          <p className="right p4">
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">
              {" "}
              浙网文[2021] 1186-054号
            </a>
          </p>
        </div>
      </footer>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
