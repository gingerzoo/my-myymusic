export interface Ilyric {
  time: number
  text: string
}

//匹配时间的正则表达式(烦死了哪些需要转义哪些不需要啊)
const timeExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

/* 歌词解析！！！！！！ */
export function parseLyric(lyricString: string) {
  //拿到每一行歌词
  const lineString: string[] = lyricString.split("\n")
  //将每一句歌词解析为相应的对象
  const lyric: Ilyric[] = []
  for (const line of lineString) {
    const results = timeExp.exec(line)
    if (!results) continue
    // 将分钟化为毫秒
    const time1 = Number(results[1]) * 60 * 1000
    // 将秒钟化为毫秒
    const time2 = Number(results[2]) * 1000
    //这里老师说有可能是两位有可能是三位，处理方式不一样，这是什么意思？
    const time3 =
      results[3].length === 3 ? Number(results[3]) : Number(results[3]) * 10
    //总时长
    const time = time1 + time2 + time3
    const text = line.replace(timeExp, "")
    lyric.push({ time, text })
  }

  return lyric
}
