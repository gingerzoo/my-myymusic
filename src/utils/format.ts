/* 对播放量count的格式化  过亿的暂时不考虑哈*/
export function formatCount(count: number) {
  if (count > 100000000) {
    return Math.floor(count / 100000000) + "亿"
  } else if (count > 10000) {
    return Math.floor(count / 10000) + "万"
  } else {
    return count
  }
}

/* 对请求的图片资源大小进行格式化 */
/*
需要传入两个参数
url指图片地址，width和height指希望得到的图片大小
默认高度和宽度一致！太妙了
*/
export function formatImgUrl(
  ImgUrl: string,
  width: number,
  height: number = width
) {
  return ImgUrl + `?param=${width}x${height}`
}

export function getPlaySong(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

/* 很好，看不懂 */
export function formatDate(time: any, fmt: any) {
  const date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    )
  }
  const o: any = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ""
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str: any) {
  return ("00" + str).substr(str.length)
}

export function formatMonthDay(time: any) {
  return formatDate(time, "MM月dd日")
}

export function formatMinuteSecond(time: any) {
  return formatDate(time, "mm:ss")
}

//传入的必须是毫秒
export function formatTime(time: number): string {
  //毫秒变秒
  const Seconds = time / 1000

  /* 获取分钟和秒钟 */
  //获取分钟
  const timeMinutes = Math.floor(Seconds / 60)
  //获取剩余秒钟
  //   const timeSeconds = Math.floor(Seconds) -timeMinutes*60
  const timeSeconds = Math.floor(Seconds) % 60

  /* 格式化时间 */
  //记住这个方法！！
  const formatMinutes = String(timeMinutes).padStart(2, "0")
  const formatSeconds = String(timeSeconds).padStart(2, "0")
  //组装
  return `${formatMinutes}:${formatSeconds}`
}

//传入的必须是毫秒
export function formatDateTime(time: number, needYear = false): string {
  //毫秒变秒
  const nowTime = new Date(time)
  /* 获取月份和日期 */
  //获取月份
  const month = nowTime.getMonth() + 1
  //获取日期
  const day = nowTime.getDate()
  //获取月份
  const year = nowTime.getFullYear()

  /* 格式化时间 */
  const nowMonth = String(month).padStart(2, "0")
  const nowDay = String(day).padStart(2, "0")
  //组装
  if (needYear) return `${year}.${nowMonth}.${nowDay}`
  else return `${nowMonth}月${nowDay}日`
}

//传入的必须是毫秒
export function formatArtist(artist: any[]): string {
  let result = ""
  let artistList: string[]
  if (artist) {
    artistList = artist.map((item, index) => {
      return item.name
    })
    result = artistList.join(`/`)
  }

  return result
}
