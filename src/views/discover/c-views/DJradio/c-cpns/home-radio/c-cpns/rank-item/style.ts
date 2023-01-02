import styled from "styled-components"
interface Irankitem {
  changeRank: number
  lastRank: number
}
export const RankingItemWrapper = styled.li<Irankitem>`
  display: flex;
  width: 424px;
  height: 60px;
  padding: 10px 0;
  &:nth-child(2n) {
    background: #f7f7f7;
  }
  .left {
    display: flex;
    align-items: center;
    height: 40px;
    .rank {
      width: 47px;
      /* margin: 6px 0 0 0; */
      text-align: center;
      em {
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-style: normal;

        color: #da4545;
        font-size: 14px;
        &:nth-of-type(3-n) {
          color: #da4545;
        }
      }
      .changeRank {
        font-size: 10px;
        color: ${(props) => {
          if (props.changeRank > 0) return `#4abbeb;`
          else if (props.changeRank < 0) return `#ba2226;`
          else return `#999999`
        }};
        .c-icon {
          display: inline-block;
          height: 6px;
          width: 6px;
          margin-right: 2px;
          background-position: ${(props) => {
            if (props.changeRank > 0) return `-74px -324px;`
            else if (props.changeRank < 0) return `-74px -304px;`
            else return `-74px -274px`
          }};
        }
        /* .changeRank-num {
          font-size: 8px !important;
        } */
      }
      .n-icon {
        display: block;
        width: 16px;
        height: 17px;
        margin: 0 auto;
        background-position: -67px -283px;
      }
    }
    img {
      height: 40px;
      width: 40px;
    }
    .info {
      width: 208px;
      font-size: 12px;
      line-height: 20px;
      margin-left: 10px;
      h3.name {
        color: #333;
        font-size: 12px;
      }
      .brand {
        color: #999;
      }
    }
  }
  .right {
    height: 8px;
    width: 100px;
    /* margin-right: 20px; */
    line-height: 8px;
    align-self: center;
    border-radius: 4px;
    background-position: 0 -240px;
    /* overflow: hidden; */
    span.hi {
      display: block;
      //注意这个属性！！！！！
      /* vertical-align: top; */
      height: 8px;
      padding-right: 3px;
      /* line-height: 8px; */
      background-position: right -318px;

      /* overflow: hidden; */
      i {
        display: block;
        width: 100%;

        height: 8px;

        /* margin-left: -4px; */
        background-position: 0 -304px;
        overflow: hidden;
      }
    }
  }
`
