import styled from "styled-components"

export const AlbumHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  /* line-height: 28px; */

  border-bottom: 2px solid #c20c0c;
  .left {
    display: flex;
  }
  h3 {
    color: #333;
    font-size: 24px;
  }

  .category {
    display: flex;
    align-items: center;
    margin-left: 20px;
    .cate-item {
      font-size: 12px;
      color: #666;
    }
    .divider {
      font-size: 12px;
      margin: 0 10px;
      color: #c7c7c7;
    }
  }

  .right {
    /* margin-top: 14px; */
    align-self: center;
    vertical-align: middle;
    .more {
      color: #666;
    }
  }
`
