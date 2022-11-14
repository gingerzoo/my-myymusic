import React, { memo } from "react"

import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = (props) => {
  return <div>Songs</div>
}

export default memo(Songs)
