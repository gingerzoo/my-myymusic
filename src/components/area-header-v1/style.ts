import styled from "styled-components"

export const HeaderV1Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  /* padding-right:10px;
  */
  padding: 0 10px 4px 0;
  border-bottom: 2px solid #c10d0c;
  color: #666;

  > .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      /* line-height: 33px; */
      padding-left: 35px;
      margin-right: 20px;

      background-position: -225px -159px;
      cursor: pointer;
    }

    .keywords {
      display: flex;
      align-items: center;

      .title-item {
        display: flex;

        //如何让最后一根竖线不展示，这里是css的方法

        /* &:last-child {
          .line {
            display: none;
          }
        } */

        .text {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      .title-item .line {
        margin: 0 10px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
