import React, { memo, useCallback, useEffect, useRef, useState } from "react"

import type { ReactNode, FC } from "react"
import { useAppDispatch, useAppSelector } from "@/store"
import { SongListWrapper } from "./style"
import SongItem from "@/components/song-item"
// import { Pagination } from "antd"

import {
  changeCurPageAction,
  changeToatlAction,
  getSongCateListAction
} from "../../store"
import Pagination from "@/components/pagination"
import { shallowEqual } from "react-redux"

interface IProps {
  children?: ReactNode
}

const SongList: FC<IProps> = (props) => {
  const {
    currentPage,
    playlist = [],
    total
  } = useAppSelector(
    (state) => ({
      currentPage: state.songCatList.currentPage,
      playlist: state.songCatList.playlist,
      total: state.songCatList.total
    }),
    shallowEqual
  )

  const pageRef = useRef<number>()

  const dispatch = useAppDispatch()
  const [nowPage, setPage] = useState(1)
  //   pageRef.current = currentPage

  const onChangeHandle = useCallback(
    (page: number) => {
      const newPage = page
      console.log(newPage)
      dispatch(getSongCateListAction(page))
      setPage(newPage)
    },
    [nowPage]
  )

  //   const nextBtnHandle = useCallback(
  //     (IsNext: boolean) => {
  //       const lastPage = Math.ceil(total / 35)
  //       let nextPage

  //       if (IsNext && currentPage < lastPage) nextPage = currentPage + 1
  //       else if (!IsNext && currentPage != 1) nextPage = currentPage - 1

  //       console.log("hi2")
  //     },
  //     [currentPage]
  //   )
  //   useEffect(() => {

  //   }, [])

  return (
    <SongListWrapper>
      <div className="playlist-con">
        {playlist.length > 0 &&
          playlist.map((item, index) => {
            return (
              <div key={index} className="playlist-item">
                <SongItem itemData={item} width={140} />
              </div>
            )
          })}
      </div>

      <Pagination
        pageSize={35}
        current={currentPage}
        total={total}
        onChangeHandle={onChangeHandle}
        // nextBtnHandle={nextBtnHandle}
      />
    </SongListWrapper>
  )
}

export default memo(SongList)
