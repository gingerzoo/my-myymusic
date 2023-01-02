import styled from "styled-components"

export const SingerWrapper = styled.div`
  .content {
    display: flex;
    /* width: 100%; */
    min-height: 900px;
    border: 1px solid #d3d3d3;
    background-repeat: repeat-y;
    background-position: center 0;
    .content-left {
      width: 180px;
    }
    .content-right {
      flex: 1;
      padding: 40px;

      /* width: 0 */
    }
  }
`
