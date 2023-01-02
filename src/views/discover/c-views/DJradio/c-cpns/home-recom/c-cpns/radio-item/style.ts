import styled from "styled-components"

export const RadioItemWrapper = styled.li`
  display: flex;
  /* justify-content: space-between; */
  width: 435px;
  height: 160px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  /* &:nth-child(2n) {
    margin-left: 28px;
  } */
  img {
    width: 120px;
    height: 120px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    h3 {
      font-size: 18px;
      font-weight: 700;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    p {
      color: #999;
      font-size: 12px;
      line-height: 20px;
    }
  }
`
