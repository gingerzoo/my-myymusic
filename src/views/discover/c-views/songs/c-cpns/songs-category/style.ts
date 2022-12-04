import styled from "styled-components"

export const CategoryWrapper = styled.div`
  position: absolute;
  left: -30px;
  top: 50px;
  width: 720px;
  /* height: 300px; */
  z-index: 9;
  /* background-color: plum; */
  .cate-content {
    .cate-hd {
      position: relative;
      height: 32px;
      background-position: 0 0;
      .traicon {
        position: absolute;
        width: 24px;
        height: 11px;
        top: 2px;
        left: 132px;
        background-position: -48px 0;
      }
    }
    .cate-bd {
      width: 720px;
      height: 385px;
      padding: 0 10px;
      background-position: -720px 0;
      background-repeat: repeat-y;
      font-size: 12px;
      color: #333;
      /* .n-dl {
        display: flex;
      } */
      .cate-title {
        height: 37px;
        padding-left: 26px;
        border-bottom: 1px solid #e6e6e6;
        cursor: pointer;
        span {
          display: inline-block;
          width: 75px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          background-position: 0 -64px;
        }
      }

      dl {
        display: flex;
        dt {
          display: inline-flex;

          width: 70px;
          margin: 0 18px 0 26px;
          padding-top: 15px;
          border-right: 1px solid #e6e6e6;
          font-weight: 700;
          span {
            line-height: 24px;
          }
        }
        dd {
          display: flex;
          flex-wrap: wrap;
          flex: 1;
          padding: 16px 15px 0 0px;
          line-height: 24px;
          .subs-item {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
          .divider {
            margin: 0 12px;
            color: #e2e2e2;
          }
        }
      }
      .u-icon {
        width: 24px;
        height: 24px;
        margin: 0 8px 4px 0;
      }
      .u-icon-1 {
        background-position: -20px -735px;
      }
      .u-icon-2 {
        background-position: 0 -60px;
      }
      .u-icon-3 {
        background-position: 0 -88px;
      }
      .u-icon-4 {
        background-position: 0 -117px;
      }
      .u-icon-5 {
        background-position: 0 -141px;
      }
    }
    .cate-ft {
      height: 20px;
      background-position: -1440px -12px;
    }
  }
`
