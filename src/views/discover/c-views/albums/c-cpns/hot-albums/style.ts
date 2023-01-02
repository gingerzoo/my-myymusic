import styled from "styled-components"

export const HotAlbumWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  .album-item {
    margin: 0 33px 30px 0;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
`
