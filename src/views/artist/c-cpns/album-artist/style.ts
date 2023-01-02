import styled from "styled-components"

export const ArtistAlbumWrapper = styled.div`
  width: 640px;
  .album-list {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    margin: 20px 0 -18px 0;
  }
  .album-item {
    margin: 0 18px 30px 0;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`
