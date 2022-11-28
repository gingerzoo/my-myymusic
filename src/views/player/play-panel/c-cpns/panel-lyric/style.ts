import styled from "styled-components"

export const PanellriWrapper = styled.div`
  height: 260px;
  .listbd-right {
    overflow-y: scroll;
    width: 420px;
    height: 260px;
    padding: 20px 0;
    &::-webkit-scrollbar {
      width: 6px;
      /* height: 260px; */
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      height: 20px;
      cursor: pointer;
      background: white;
      border: 1px solid #a6a6a6;
    }
  }

  .mask-r {
    position: absolute;
    right: 2px;
    top: 0;
    width: 423px;

    height: 261px;
    /*
    z-index: ; */
    background: #121212;
    opacity: 0.9;
  }
  .bline-m,
  .bline-r {
    position: absolute;
    top: 0;
    width: 8px;
    height: 261px;
    /* z-index: 10; */
    background: #000;
    opacity: 0.5;
  }
  .bline-m {
    left: 555px;
  }
  .bline-r {
    right: 1px;
  }

  ul.lyric-list {
    /* overflow-y: scroll; */
    position: relative;
    z-index: 8;
    /* max-height: 220px;
    margin: 20px 0; */

    .lyric-line {
      color: #989898;

      height: 32px;
      line-height: 32px;
      text-align: center;
      transition: color 0.8s linear;
    }
    .nowLyric {
      font-size: 14px;
      color: #fff;
    }
  }
`
