import styled from "styled-components"

export const PanelhdWrapper = styled.div`
  .listhd {
    display: flex;
    height: 40px;
    padding: 0 5px;
    /* z-index: 9; */
    background-position: 0 0;

    .listhd-left {
      display: flex;
      width: 553px;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px;
      h4 {
        display: absolute;
        left: 25px;
        font-size: 14px;
        font-weight: 700;
        line-height: 40px;
        color: #e2e2e2;
      }
      .oper {
        .btn {
          display: inline-block;
          height: 16px;
          width: 16px;
          background-image: url(${require("@/assets/img/playlist_sprite.png")});
          margin: 2px 4px 0 0;
        }
        .line {
          width: 2px;
          height: 15px;
          border-left: 1px solid #000;
          border-right: 1px solid #2c2c2c;
          margin: 0 12px;
        }
        .favor {
          background-position: -24px 2px;
          &:hover {
            background-position: -24px -18px;
          }
        }
        .delete {
          background-position: -51px 2px;
          &:hover {
            background-position: -51px -18px;
          }
        }
      }
    }
    .listhd-right {
      position: relative;
      /* position: absolute;
      left: 595px;
      top: 0; */
      width: 420px;
      .song-name {
        width: 346px;
        color: #fff;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
      }
      .close {
        position: absolute;
        height: 30px;
        width: 30px;
        top: 14px;
        right: 0px;
        background: url(${require("@/assets/img/playlist_sprite.png")})-205px
          2px;
        &:hover {
          background-position: -205px -28px;
        }
      }
    }
  }
`
