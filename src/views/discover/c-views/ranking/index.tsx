import React, { memo } from "react"

import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = (props) => {
  return <div>Ranking</div>
}

export default memo(Ranking)
