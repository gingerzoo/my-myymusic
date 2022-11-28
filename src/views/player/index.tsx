import React, { memo, useEffect } from "react"

import type { ReactNode, FC } from "react"
import { PlayerWrapper } from "./style"
import PlayBar from "./play-bar"
import { getSongDetAction } from "./store/player"
import { useAppDispatch } from "@/store"
import PlayPanel from "./play-panel"

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = (props) => {
  //   const dispatch = useAppDispatch()

  //   useEffect(() => {
  //     dispatch(getSongDetAction())
  //   }, [])
  return (
    <PlayerWrapper>
      <PlayBar />
      <PlayPanel />
    </PlayerWrapper>
  )
}

export default memo(Player)
