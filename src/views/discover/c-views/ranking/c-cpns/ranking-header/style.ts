import styled from "styled-components"

export const RankingHdWrapper = styled.div`
  padding: 40px 0;
  display: flex;

  .cover {
    position: relative;
    padding: 3px;
    border: 1px solid #ccc;

    img {
      height: 150px;
      width: 150px;
    }
    .mask {
      position: absolute;
      width: 150px;
      height: 150px;
      z-index: 10;
      background-position: -230px -380px;
      top: 0px;
      left: 0px;
    }
  }
  .info {
    flex: 1;
    margin-left: 30px;
    padding-top: 15px;
  }
  .info-name {
    height: 24px;
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
  }
  .info-time {
    display: flex;
    align-items: center;
    height: 35px;
    margin-bottom: 20px;
    line-height: 35px;
    font-size: 12px;
    color: #666;
    .clock {
      width: 13px;
      height: 13px;
      background-position: -18px -682px;
    }
  }
`
