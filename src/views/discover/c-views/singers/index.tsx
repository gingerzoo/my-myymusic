import React, { memo } from "react"

import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Singers: FC<IProps> = (props) => {
  return <div>Singers</div>
}

export default memo(Singers)
