import styled from "styled-components"

export const TopRankingWrapper = styled.div`
  width: 240px;
  padding-top: 20px;
  border: 1px solid #d3d3d3;
  border: 0 1px;
  .header {
    padding: 0 10px 12px 15px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
  }
  ul {
    font-size: 12px;
    li {
      display: flex;
      height: 60px;
      cursor: pointer;
      padding: 10px 0 10px 20px;
      img {
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1px 0;
        color: #000;
      }
      .item-name {
        width: 160px;
      }
    }
  }
`
