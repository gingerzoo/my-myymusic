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
  const comments = curComment.comments

  const dispatch = useAppDispatch()

  const [nowpage, setPage] = useState(1)

  const onChangeHandle = useCallback(
    (page: number) => {
      setPage(page)
      dispatch(getCurCommentAction(page))
    },
    [nowpage]
  )
  return (
    <RankCommentWrapper>
      <AreaHeaderV3 title="评论" submessage={`共${curComment.total}条评论`} />
      <div className="comment-list">
        {comments.map((item, index) => {
          return <CommentItem key={item.commentId} itemData={item} />
        })}
      </div>
      <Pagination
        current={nowpage}
        total={Math.floor(curComment.total / 20)}
        onChangeHandle={onChangeHandle}
        pageSize={20}
      />
    </RankCommentWrapper>
  )
}

export default memo(RankComment)
