import styled from "styled-components"

export const PanelLisWrapper = styled.div`
  margin-left: 1px;
  height: 261px;
  .listbd-left {
    overflow-y: scroll;
    background-color: #202020;
    width: 562px;
    height: 261px;
    margin-left: 2px;
    &::-webkit-scrollbar {
      width: 6px;
      /* height: 260px; */
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      height: 100px;
      cursor: pointer;
      background: pink;
      border: 1px solid #a6a6a6;
    }
  }
  .mask-l {
    position: absolute;
    left: 2px;
    top: 0;
    width: 553px;
    height: 261px;
    /* z-index: 2; */
    background: #121212;
    opacity: 0.9;
  }

  .playlist {
    /* overflow: hidden; */
    /* 这里为啥设置相对定位不行呢 */
    position: relative;
    z-index: 100;
    width: 553px;
    color: #fff;

    > .playlist-item {
      display: flex;
      align-items: center;
      /* margin-left: 2px; */
      height: 28px;
      width: 553px;
      /* color: #fff; */
      color: #ccc;

      padding-left: 10px;
      &:hover {
        color: #fff;

        .icons {
          visibility: visible !important;
        }
      }

      .flag {
        display: block;
        width: 10px;
        height: 13px;
        background-position: -182px 0;
      }
      .song-name {
        width: 256px;
        padding-left: 10px;
      }

      .song-artist {
        width: 80px;
        margin-left: 8px;
      }

      .source {
        height: 15px;
        width: 15px;

        margin-left: 15px;
        background-position: -80px 0;
      }
      .song-dur {
        width: 45px;
      }

      .icons {
        visibility: hidden;

        .btn {
          display: inline-block;
          height: 16px;
          width: 16px;
          margin: 0 4px;
        }
        .favor {
          margin-right: 5px;
          background-position: -24px 1px;
          &:hover {
            background-position: -24px -19px;
          }
        }
        .share {
          background-position: 0px 1px;
          &:hover {
            background-position: 0px -19px;
          }
        }
        .download {
          background-position: -57px -49px;
          &:hover {
            background-position: -80px -49px;
          }
        }
        .delete {
          background-position: -51px 1px;
          &:hover {
            background-position: -51px -19px;
          }
        }
      }
    }
  }
`

// export const PanelListIitemWrap = styled.div``
