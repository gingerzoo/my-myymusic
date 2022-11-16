import styled from "styled-components"

export const ItemWrapper = styled.div`
  width: 140px;
  /* margin: 20px 20px 20px 0; */
  margin-bottom: 30px;
  .top {
    position: relative;
    height: 140px;
    width: 140px;

    img {
      height: 100%;
      width: 100%;
    }

    .cover {
      position: absolute;
      left: 0;

      top: 0;
      bottom: 0;
      right: 0;

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
        }
      }
    }
  }

  .bottom {
    font-size: 14px;
    color: #000;

    margin-top: 8px;
  }
`
