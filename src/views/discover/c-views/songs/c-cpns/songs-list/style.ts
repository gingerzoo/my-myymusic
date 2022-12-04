import styled from "styled-components"

export const SongListWrapper = styled.div`
  .playlist-con {
    padding: 20px 0 10px 0;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    .playlist-item {
      margin-right: 50px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
`
