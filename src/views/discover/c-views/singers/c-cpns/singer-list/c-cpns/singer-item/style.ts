import styled from "styled-components"

export const SingerItemWrapper = styled.div`
  margin-bottom: 30px;
  .pic {
    position: relative;
    img {
      height: 130px;
      width: 130px;
    }
    div.cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 130px;
      height: 130px;
      background-position: 0 -680px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    .name {
      font-size: 12px;
      color: #000;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .sign_icon {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`
