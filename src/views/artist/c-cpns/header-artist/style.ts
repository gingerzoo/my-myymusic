import styled from "styled-components"

export const ArtistHeaderWrapper = styled.div`
  .artist-info {
    display: flex;
    height: 34px;
    font-weight: normal;
    .name {
      line-height: 24px;

      font-size: 24px;
      color: #333;
    }

    .alias {
      padding-left: 10px;
      font-size: 14px;
      line-height: 32px;
      color: #999;
    }
  }
  .artist-pic {
    position: relative;
    img {
      object-fit: cover;
      width: 640px;
      height: 300px;
    }
    .mask {
      position: absolute;
      background-position: 0 0;
      top: 0;
      left: 0;
      width: 640px;
      height: 300px;
    }
    .icon {
      position: absolute;
      height: 32px;
      bottom: 18px;
    }

    .artist-home {
      width: 96px;
      right: 116px;
      background-position: 0 -1156px;
      &:hover {
        background-position: 0 -1196px;
      }
    }
    .artist-sub {
      width: 76px;
      right: 20px;
      background-position: 0 -500px;
      &:hover {
        background-position: 0 -540px;
      }
    }
  }
`
