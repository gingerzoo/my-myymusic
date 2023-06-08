import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { PlaylistWrapper } from "./style"
import { useAppSelector } from "@/store"

interface Iprops {
  children?: ReactNode
}

const Playlist: FC<Iprops> = (props) => {
  // const {}=useAppSelector(state=>)
  return (
    <PlaylistWrapper>
      <div className="playlist-content wrap4 wrapper_v2">
        {/* <div className="left">你好左边</div>
        <div className="right">你好右边</div> */}
        <div className="left">
          <div className="playlist-top">
            <div className="pic">
              <img src="" />
              <span></span>
            </div>
          </div>
        </div>
        <div className="right">右边</div>
      </div>
    </PlaylistWrapper>
  )
}

export default memo(Playlist)
