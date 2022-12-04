import styled from "styled-components"

export const RankingLiWrapper = styled.div`
  margin-bottom: 40px;
  color: #666;
  .list-title {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 28px;
    border-bottom: 2px solid #c20c0c;

    .itemCount {
      /* color: #666; */
      font-size: 12px;
      margin-left: 20px;
    }
    .playCount {
      /* color: #666; */
      font-size: 12px;
    }
  }
  .list-body {
    table {
      width: 100%;
      //原来是你小子！！！！！真辛苦找得我
      table-layout: fixed;
      /* thead tr {
        display: flex;
      } */
      th {
        /* width: 100%; */
        height: 38px;
        line-height: 18px;
        font-size: 12px;
        font-weight: normal;
        /* color: #666; */

        padding: 8px 10px;
        text-align: left;
        border: 1px solid #d3d3d3;
      }
      th.first {
        width: 77px;
      }
      /* th.title {
        width: 326px;
      } */
      th.duration {
        width: 91px;
      }
      th.artist {
        width: 174px;
      }
    }
  }
`
