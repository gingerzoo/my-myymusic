import styled from "styled-components"

export const AlbumItemWrapper = styled.div`
  position: relative;
  width: 118px;
  height: 150px;
  > .al-img {
    img {
      height: 100px;
      width: 100px;
    }

    .cover {
      position: absolute;
      width: 118px;
      height: 100px;
      left: 0;
      top: 0;
      background-position: 0 -570px;
    }
  }

  > .info {
    font-size: 12px;
    .al-name {
      color: #000;
      /* word-wrap: break-word; */
    }

    .artist {
      color: #666;
    }
  }
`
