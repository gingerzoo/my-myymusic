import styled from "styled-components"

export const MvItemWrapper = styled.div`
  width: 137px;
  .mv-cover {
    position: relative;
    img {
      object-fit: cover;
      width: 137px;
      height: 103px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 137px;
      height: 103px;
      background-position: 0 -1170px;
    }
    .play-icon {
      position: absolute;
      top: 27%;
      left: 33%;
      width: 44px;
      height: 44px;
      /* transform: translate(-50% -50%); */

      background-position: -30px -135px;
      &:hover {
        background-position: -30px -85px;
      }
    }
  }

  .info {
    width: 100%;
    p {
      margin: 8px 0 3px;
      font-size: 14px;
      color: #000;
    }
  }
`
