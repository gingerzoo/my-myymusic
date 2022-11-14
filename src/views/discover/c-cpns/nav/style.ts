import styled from "styled-components"

export const NavWrapper = styled.div`
  height: 35px;
  background-color: ${(props) => props.theme.color.primaryColor};
  .nav {
    display: flex;
    padding-left: 180px;

    .nav-item {
      /* padding: 0 25px;
      line-height: 35px; */

      a {
        padding: 0 13px;
        margin: 7px 17px 0;
        line-height: 35px;
        color: #fff;

        &:hover {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
