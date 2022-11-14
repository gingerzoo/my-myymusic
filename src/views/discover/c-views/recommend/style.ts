import styled from "styled-components"

export const RecomWrapper = styled.div`
  /* 直接子元素 */

  > .content {
    border: 1px solid #d3d3d3;
    /* width: 980px; */
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;

    display: flex;
    margin-top: 10px;

    > .content-left {
      padding: 20px;
      width: 729px;
    }

    > .content-right {
      margin-left: 1px;
      width: 250px;
    }
  }
`
