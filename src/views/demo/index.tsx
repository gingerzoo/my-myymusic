import React, { memo } from "react"

//把类型声明单独提出来，一些编辑器在删除类型时比较方便
import type { ReactNode, FC } from "react"
//type ReactNone=ReactElement|string|number|ReactFragment|boolean|undefined|
interface IProps {
  children?: ReactNode
  name?: string
  age?: number
}

// React.FC是React.FunctionComponent的别名
//这里用到了泛型接口的知识
const Download: FC<IProps> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>{props.children}</div>
    </div>
  )
}

export default memo(Download)
