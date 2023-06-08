import React, { memo, useCallback, useState } from "react"

import type { ReactNode, FC } from "react"
import { RankCommentWrapper } from "./style"
import AreaHeaderV3 from "@/components/area-header-v3"
import { useAppDispatch, useAppSelector } from "@/store"
import CommentItem from "../comment-item"
import Pagination from "@/components/pagination"
import { getCurCommentAction } from "../../store"

interface IProps {
  children?: ReactNode
}

const RankComment: FC<IProps> = (props) => {
  const { curComment } = useAppSelector((state) => ({
    curComment: state.ranking.curComment
  }))
  //   const comments = curComment.comments
  console.log("这是没进来comment组件的意思吗")
  console.log("curComment", curComment)

  const dispatch = useAppDispatch()

  const [nowpage, setPage] = useState(1)

  const onChangeHandle = useCallback(
    (page: number) => {
      //   setPage(page)
      dispatch(getCurCommentAction({ type: 2, pageNum: page }))
    },
    [nowpage]
  )
  return (
    <RankCommentWrapper>
      {curComment?.totalCount && (
        <AreaHeaderV3
          title="评论"
          submessage={`共${curComment.totalCount}条评论`}
        />
      )}

      <div className="comment-list">
        {curComment?.comments &&
          curComment.comments.map((item, index) => {
            console.log("singel-commenr", item)
            return <CommentItem key={item.commentId} itemData={item} />
          })}
      </div>
      <Pagination
        current={nowpage}
        total={
          curComment?.totalCount ? Math.floor(curComment.totalCount / 20) : 0
        }
        onChangeHandle={onChangeHandle}
        pageSize={20}
      />
    </RankCommentWrapper>
  )
}

export default memo(RankComment)
