import styled from "styled-components"

export const PlayBarWrapper = styled.div`
  background-position: 0px 0px;
  background-repeat: repeat-x;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  z-index: 9;
  .content {
    display: flex;
    /* position: absolute; */
    /* bottom: 0; */
    position: relative;

    justify-content: space-between;
    /* align-items: center; */
    height: 47px;
    margin-top: 6px;
  }
`
interface IBtnProps {
  isPlay: boolean
}

/* 天呐传参好难 */
//attrs里面传递一个对象（或者回调函数返回对象）
export const PlayControlWrapper = styled.div<IBtnProps>`
  display: flex;
  align-items: center;
  .prev,
  .next {
    height: 28px;
    width: 28px;
  }

  .prev {
    background-position: -0px -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .play {
    height: 36px;
    width: 36px;
    margin: 0 8px;

    background-position: -0px ${(props) => (props.isPlay ? "-165px" : "-204px")};
    &:hover {
      background-position: -40px
        ${(props) => (props.isPlay ? "-165px" : "-204px")};
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  .image {
    margin-right: 8px;
  }
  .info {
    display: flex;
    flex-direction: column;
    .song {
      position: relative;
      top: 8px;
      left: 8px;
      color: #e1e1e1;
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    .process {
      display: flex !important;
      position: relative;

      .ant-slider {
        width: 466px;
        margin-right: 10px;
      }
      .ant-slider-handle {
        background-color: ${(props) => props.theme.color.primaryColor};
        border: 4px solid #fff;
        margin-top: -3px;
      }
      .ant-slider-rail {
        /* width: 466px; */
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) 0px 0px;
      }

      .ant-slider-track {
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        /* background-color: ${(props) => props.theme.color.primaryColor}; */
      }
      .time {
        display: flex;
        position: absolute;
        bottom: 7px;
        right: -65px;
        color: #797979;
        font-size: 12px;
        text-shadow: 0 1px 0 #121212;
        .current {
          color: #a1a1a1;
        }
        .divider {
          margin: 0 1px;
        }
      }
    }
  }
`
interface IBarOperator {
  playMode: number
  isVolume: boolean
  isList: boolean
}
export const PlayOperWrapper = styled.div<IBarOperator>`
  display: flex;
  align-items: center;
  .btn {
    width: 25px;
    height: 25px;
  }
  .left {
    display: flex;
    margin-left: 60px;
    padding-right: 10px;
    .lyric {
      background-position: 0 0;
      &:hover {
        background-position: 0 -25px;
      }
    }

    .favor {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }

    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    /* position: relative; */
    display: flex;
    background-position: -149px -248px;
    padding-left: 13px;

    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }

      .volumeBox {
        visibility: ${(props) => (props.isVolume ? "visible" : "hidden")};
        position: absolute;
        top: -113px;
        height: 113px;
        width: 32px;
        /* margin: 10px 0; */
        background-color: plum;
        background-position: 0 -503px;
        .ant-slider {
          /* margin-bottom: 10px; */
        }
        .ant-slider-vertical {
          height: 93px;
          margin: 10px 10px;
        }
        .ant-slider-rail {
          background-color: transparent;
        }
        .ant-slider-track {
          background: url(${require("@/assets/img/playbar_sprite.png")})-40px
            bottom;
        }
        .ant-slider-handle {
          height: 18px;
          width: 18px;
          border: none;
          margin-left: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")})-40px -250px;
        }
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 0:
            return "-3px -344px"
          case 1:
            return "-66px -249px"
          case 2:
            return "-66px -344px"
        }
      }};
      /* -33px -344px */
      &:hover {
        background-position: ${(props) => {
          switch (props.playMode) {
            case 0:
              return "-33px -344px"
            case 1:
              return "-93px -249px"
            case 2:
              return "-93px -344px"
          }
        }};
      }
    }

    .playlist {
      width: 56px;
      height: 25px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`
