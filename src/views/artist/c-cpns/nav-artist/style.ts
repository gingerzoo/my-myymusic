import styled from "styled-components"

export const ArtistNavWrapper = styled.ul`
  display: flex;
  height: 39px;

  border: 1px solid #ccc;
  border-width: 0 1px;
  background-position: 0 0;
  background-repeat: repeat-x;
  > li {
    width: 25%;
    a {
      display: block;
      height: 39px;
      /* padding-left: 2px; */

      span {
        display: inline-block;
        height: 37px;
        width: 100%;
        line-height: 37px;
        font-size: 14px;

        /* width: 134px; */
        padding: 2px 2px 0 0;
        /* background-position: right -90px; */
        cursor: pointer;
        text-align: center;
        &.redActive,
        &:hover {
          background-position: right -90px;
        }
      }
      &.myActive {
        background-position: left -90px;
      }
    }
  }
`
