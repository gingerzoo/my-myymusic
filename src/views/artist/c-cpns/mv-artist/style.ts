import styled from "styled-components"

export const ArtistMvWrapper = styled.div`
  .mvs-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .mvs-item {
    margin: 0 29px 30px 0;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`
