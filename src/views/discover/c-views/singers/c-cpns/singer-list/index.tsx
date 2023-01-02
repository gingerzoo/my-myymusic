import React, { memo } from "react"

import type { ReactNode, FC } from "react"
import { SingerListWrapper } from "./style"
import { useAppSelector } from "@/store"
import AreaHeaderV3 from "@/components/area-header-v3"
import SingerBox from "./c-cpns/singer-box"
import SingerAlph from "./c-cpns/singer-alph"
import AlphHeader from "./c-cpns/alph-header"

interface IProps {
  children?: ReactNode
}

const SingerList: FC<IProps> = (props) => {
  const { singerList, curArea, curType } = useAppSelector((state) => ({
    singerList: state.singerCatList.singerList,
    curArea: state.singerCatList.curArea,
    curType: state.singerCatList.curType
  }))

  const header1 = (
    <AreaHeaderV3 title={"热门歌手"}>
      <a href="#">更多{`>`}</a>{" "}
    </AreaHeaderV3>
  )

  const header2 = <AreaHeaderV3 title={curArea.name + curType.name} />

  return (
    <SingerListWrapper>
      {curArea.index == -1 && header1}
      {curArea.index != -1 && header2}
      {/* <AlphHeader /> */}
      {curArea.index != -1 && <AlphHeader />}

      <SingerBox />
      <SingerAlph />
    </SingerListWrapper>
  )
}

export default memo(SingerList)
