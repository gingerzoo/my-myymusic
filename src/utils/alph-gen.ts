export function alphGen() {
  const alphList = []
  for (let i = 0; i < 26; i++) {
    alphList.push({
      name: String.fromCharCode(65 + i),
      value: String.fromCharCode(97 + i)
    }) //输出A-Z 26个大写字母
  }

  alphList.push({
    name: "其他",
    value: 0
  })

  alphList.unshift({
    name: "全部",
    value: -1
  })
  return alphList
}
