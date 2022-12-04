interface IcateType {
  all?: any
  sub: any[]
  categories?: any
}

interface ItopItemType {
  name: string
  id: number
  updateFrequency: string
  coverImgUrl: string
}

interface ItoplistType {
  type: string
  info: ItopItemType[]
}

interface IfreqlistType {
  id: number
  UpdateRreq: string
}
export function normalCategory(data: IcateType) {
  const OrigCategory = data.categories
  const NewCategory = Object.values(OrigCategory).map((item, index) => {
    return {
      name: item,
      subs: []
    }
  })
  for (const subitem of data.sub) {
    ;(NewCategory[subitem.category].subs as any).push(subitem)
  }
  return NewCategory
}

export function normalTopList(data: ItopItemType[]) {
  const listSpecial = data.filter((item, index) => index < 4)
  const listGlobal = data.filter((item, index) => index >= 4)

  const typeList = ["云音乐特色榜", "全球媒体榜"]
  const newList: ItoplistType[] = typeList.map((item, index) => {
    return {
      type: item,
      info: []
    }
  })
  for (const item of listSpecial) {
    newList[0].info.push(item)
  }
  for (const item of listGlobal) {
    newList[1].info.push(item)
  }

  return newList
}

export function normalUpdateFreq(data: ItopItemType[]) {
  const updateFreqList: { [key: number]: string } = {}
  data.forEach((item, index) => {
    updateFreqList[item.id] = item.updateFrequency
  })
  return updateFreqList
}
