/* 对播放量count的格式化  过亿的暂时不考虑哈*/
export function formatCount(count: number) {
  if (count > 10000) {
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
