import styled from "styled-components"

interface Ilike {
  width: number
}
export const ItemWrapper = styled.div<Ilike>`
  width: ${(props) => props.width + "px"};
  /* margin: 20px 20px 20px 0; */
  margin-bottom: 30px;
  .top {
    position: relative;
    height: ${(props) => props.width + "px"};
    width: ${(props) => props.width + "px"};

    img {
      height: 100%;
      width: 100%;
    }

    .cover {
      position: absolute;
      left: 0;

      top: 0;
      right: 0;
      bottom: 0;

      background-position: 0px 0px;

      .info {
        display: flex;

        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 27px;
        padding: 0 10px;
        background-position: 0 -537px;

        .headset {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .bottom {
    /* 哇这个属性第一次见，表示允许的文字行数 */
    /* line-clamp: 2;
    text-overflow: ellipsis; */
    .discribe {
      margin: 8px 0 3px;
      a {
        font-size: 14px;
        color: #000;
      }
    }

    .creator > span {
      font-size: 12px;
      color: rgb(153, 153, 153);
    }
    .creator img {
      display: inline-block;
      height: 13px;
      width: 13px;
      vertical-align: middle;
      margin-left: 2px;
    }
  }
`
