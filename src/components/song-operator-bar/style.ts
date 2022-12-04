import styled from "styled-components"

export const SongOperBarWrapper = styled.div`
  display: flex;
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
  .favor-icon {
    background-position: 0 -977px;
  }
  .share-icon {
    background-position: 0 -1225px;
  }
  .download-icon {
    background-position: 0 -2761px;
  }
  .comment-icon {
    background-position: 0 -1508px;
  }
`
