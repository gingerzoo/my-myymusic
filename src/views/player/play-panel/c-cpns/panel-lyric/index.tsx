import React, { ElementRef, memo, useEffect, useRef } from "react"

import type { ReactNode, FC } from "react"
import { PanellriWrapper } from "./style"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
}

const PanelLyric: FC<IProps> = (props) => {
  const { lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex
    }),
    shallowEqual
  )

  const lyricScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lyricIndex > 3) {
      lyricScrollRef.current?.scrollTo({
        top: (lyricIndex - 3) * 32
        //   behavior: "smooth"
      })
    }
  }, [lyricIndex])
  return (
    <PanellriWrapper>
      <div className="bline-m"></div>
      <div className="listbd-right" ref={lyricScrollRef}>
        <ul className="lyric-list">
          {lyrics.map((item, index) => {
            return (
              <li
                key={item.time}
                className={classNames("lyric-line", {
                  nowLyric: index == lyricIndex
                })}
              >
                {item.text}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mask-r"></div>
      {/* <div className="bline-r"></div> */}
    </PanellriWrapper>
  )
}

export default memo(PanelLyric)
