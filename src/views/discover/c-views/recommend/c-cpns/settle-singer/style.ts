import styled from "styled-components"

export const SettleWrapper = styled.div`
  .artists {
    margin: 6px 0 14px 20px;
    li {
      background-color: #fafafa;
      /* width: 120px; */
      margin-top: 14px;
      margin-right: 20px;
      a {
        display: flex;

        img {
          height: 64px;
          width: 64px;
          object-fit: cover;
        }
      }
    }

    .info {
      width: 142px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 14px;
      border: 1px solid #e9e9e9;

      .name {
        font-weight: 700;
      }
    }
  }

  .applyFor {
    margin-top: 12px;
    a {
      display: block;

      height: 31px;
      line-height: 31px;
      margin: 0 20px;
      border-radius: 4px;
      color: #333;
      font-weight: 700;
      text-align: center;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      /* background-position: right -100px; */
    }
  }
`
