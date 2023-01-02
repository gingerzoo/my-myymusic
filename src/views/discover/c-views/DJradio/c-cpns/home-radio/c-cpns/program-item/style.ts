import styled from "styled-components"

export const ProgramItemWrapper = styled.li`
  display: flex;
  width: 424px;
  height: 60px;
  padding: 10px 0;
  line-height: 40px;
  &:nth-child(2n) {
    background: #f7f7f7;
  }
  .left {
    margin-left: 20px;
    display: flex;
    img {
      height: 40px;
      width: 40px;
    }
    .info {
      width: 254px;
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
    margin-left: 10px;
    a {
      display: inline-block;
      height: 18px;
      padding: 0 6px;
      border: 1px solid #999;
      line-height: 18px;
      font-size: 12px;
      color: #999;
    }
  }
`
