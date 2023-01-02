import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { SingerCateWrapper } from "./style"
import { useAppDispatch, useAppSelector } from "@/store"
import { getArtistList } from "../../service"
import {
  changeCurAreaAction,
  changeCurTypeAction,
  getSingerListAction
} from "../../store"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
}

const SingerCategory: FC<IProps> = (props) => {
  const { curArea, curType } = useAppSelector((state) => ({
    curArea: state.singerCatList.curArea,
    curType: state.singerCatList.curType
  }))
  const area = [
    { name: "华语", index: 7 },
    { name: "欧美", index: 96 },
    { name: "日本", index: 8 },
    { name: "韩国", index: 16 },
    { name: "其他", index: 0 }
  ]
  //   const type = ["女歌手", "男歌手", "乐队"]
  const type = [
    { name: "男歌手", index: 1 },
    { name: "女歌手", index: 2 },
    { name: "乐队", index: 3 }
  ]

  const dispatch = useAppDispatch()

  function BtnClickHandle(area: any, type: any) {
    dispatch(changeCurAreaAction(area))
    dispatch(changeCurTypeAction(type))
    dispatch(getSingerListAction())
  }

  return (
    <SingerCateWrapper>
      <div className="recom">
        <h3 className="title">推荐</h3>
        <ul>
          <li>
            <a
              className={classNames("singer_sprite", {
                isActive: curArea.index == -1 && curType.index == -1
              })}
              onClick={() =>
                BtnClickHandle(
                  { name: "全部", index: -1 },
                  { name: "全部", index: -1 }
                )
              }
            >
              推荐歌手
            </a>
          </li>
          <li>
            <a className="singer_sprite">入驻歌手</a>
          </li>
        </ul>
      </div>
      {area.map((item1, index) => {
        return (
          <div key={index} className="cate-item">
            <h3 className="title">{item1.name}</h3>
            <ul>
              {type.map((item2, index) => {
                return (
                  <li key={item2.name}>
                    <a
                      className={classNames("singer_sprite", {
                        isActive:
                          item1.index == curArea.index &&
                          item2.index == curType.index
                      })}
                      onClick={() => BtnClickHandle(item1, item2)}
                    >
                      {item1.name + item2.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </SingerCateWrapper>
  )
}

export default memo(SingerCategory)
