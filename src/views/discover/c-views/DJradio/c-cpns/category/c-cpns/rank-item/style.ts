import styled from "styled-components"

export const RankItemWrapper = styled.li`
  display: flex;
  width: 435px;
  height: 160px;

  padding: 20px 0px;
  border-bottom: 1px solid rgb(231, 231, 231);

  /* &:nth-child(2n + 1) {
    margin-left: 0;
  } */
  img {
    height: 120px;
    width: 120px;
  }
  .radio {
    margin-left: 20px;
    font-size: 12px;
    h3 {
      height: 64px;
      line-height: 64px;
      font-size: 18px;
      font-weight: 700;
    }
    .radio-name {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      line-height: 20px;
      color: #333;
      .radio-icon {
        width: 14px;
        height: 15px;
        margin-right: 5px;

        background-position: -50px -300px;
      }
      img.avatarDetail {
        height: 13px;
        width: 13px;
        margin-left: 5px;
      }
    }
    .radio-info {
      color: #999;
      font-size: 12px;
    }
  }
`
