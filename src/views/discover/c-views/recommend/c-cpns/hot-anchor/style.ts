import styled from "styled-components"

export const AnchorWrapper = styled.div`
  padding: 20px;
  font-size: 12px;

  .anchor-list {
    .anchor-item {
      display: flex;
      width: 210px;
      margin-bottom: 10px;
      img {
        height: 40px;
        width: 40px;
      }

      .anchor {
        color: #000;
      }

      .desc {
        color: #666;
      }
    }
  }

  .info {
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 8px;
  }
`
