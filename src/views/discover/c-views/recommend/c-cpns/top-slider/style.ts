import styled from "styled-components"

export const BannerWrapper = styled.div`
  /* background: url("http://p1.music.126.net/4NoP21yJ33ox6usZYA5qvw==/109951168057705886.jpg?imageView&blur=40x20")
    center/6000px;

     */

  .slider {
    position: relative;
    display: flex;
    height: 270px;

    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .left {
      left: -68px;
      background-position: 0 -360px;
    }

    .right {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  height: 270px;
  /* overflow: hidden; */

  /* 嘿嘿  在antd的carsoul的组件直接修改样式！！！就是稍微有点难找class名
  但是我做到了！！！！完完全全自己独立修改的！*/
  /* .slick-dots li {
    border-color: red;
    height: 8px;
    width: 8px;
    margin: 0 8px;
    button {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }

  li.slick-active {
    width: 8px !important;
  } */
  .slider-item {
    img {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 4px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 3px;

      .dot-item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url(${require("@/assets/img/banner_sprite.png")});
        background-position: 3px -343px;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`

export const BannerControl = styled.div`
  /* 这里宽度就和父元素一样啦  只有weight和left/right的默认值是auto哦 */
  position: absolute;

  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  /* transform: translateY(-50%); */
  background-color: transparent;
  cursor: pointer;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }

  .resfl {
    clear: both;
  }
`
