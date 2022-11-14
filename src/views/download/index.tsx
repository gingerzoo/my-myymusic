import React, { memo } from "react"

import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = (props) => {
  return <div>Download</div>
}

export default memo(Download)
