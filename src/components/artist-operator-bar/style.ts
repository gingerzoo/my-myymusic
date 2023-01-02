import styled from "styled-components"

export const ArtOpeBarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 31px;
  margin: 20px 0 10px 0;
  .hd-left {
    display: flex;
  }
  .item {
    height: 31px;
    min-width: 23px;
    margin-right: 6px;
    padding-right: 5px;
    background-position: right -1020px;
  }
  .icon {
    display: inline-block;
    height: 31px;
    line-height: 30px;
    font-size: 10px !important;
    padding: 0 7px 0 30px;
  }

  .favor-icon {
    background-position: 0 -977px;
  }
  .play-add {
    display: flex;
    align-items: center;
    margin-right: 6px;

    .play {
      height: 31px;
      //会继承！
      line-height: 31px;
      background-position: right -428px;

      .play-m {
        display: flex;
        align-items: center;
        color: #fff;
        height: 31px;
        padding: 0 7px 0 8px;
        background-position: 0 -387px;
        .play-icon {
          display: inline-block;
          width: 20px;
          height: 18px;
          background-position: 0 -1622px;
        }
      }
    }
    .add-icon {
      //flex子元素已经是行内块元素了！
      /* display: inline-block; */
      width: 31px;
      height: 31px;
      background-position: 0 -1588px;
    }
  }

  .hot-single {
    span {
      background-position: 0 -59px;
      padding: 0 15px 0 20px;
      .arrow-bottom {
        display: inline-block;
        width: 8px;
        height: 5px;
        margin-left: 6px;
      }
      .text {
        color: #333;
        font-style: normal;
      }
    }
  }
`
