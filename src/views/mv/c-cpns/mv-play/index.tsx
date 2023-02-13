import React, { memo, useRef, useState } from "react"

import type { ReactNode, FC } from "react"
import { MvPlayWrapper } from "./style"
import { useAppSelector } from "@/store"
import { Link } from "react-router-dom"
import OpeBar from "../ope-bar"

interface IProps {
  children?: ReactNode
}

const MvPlay: FC<IProps> = (props) => {
  const { id, url, detail } = useAppSelector((state) => ({
    id: state.mv.id,
    url: state.mv.url,
    detail: state.mv.detail
  }))
  //   const AudioRef = useRef<ElementRef<typeof audio>>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlay, setIsPlay] = useState(true)

  function playBtnHandle() {
    setIsPlay(!isPlay)
    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }
  return (
    <MvPlayWrapper isPlay={isPlay}>
      <div className="title">
        <h2>
          <i className="sprite_icon3 mv-icon"></i>
          {detail.name}
        </h2>
        <Link to={`/artist?id=${detail.artistId}`}>{detail.artistName}</Link>
      </div>
      <div className="video-box">
        <video
          width="640"
          height="360"
          controls={true}
          src={url}
          autoPlay
          ref={videoRef}
        />
        <div className="cover" onClick={playBtnHandle}>
          <a className="play"></a>
        </div>
      </div>

      <OpeBar />
    </MvPlayWrapper>
  )
}

export default memo(MvPlay)
