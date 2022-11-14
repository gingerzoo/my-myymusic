import React, { memo } from "react"

import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Albums: FC<IProps> = (props) => {
  return <div>Albums</div>
}

export default memo(Albums)
