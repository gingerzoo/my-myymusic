import styled from "styled-components"

export const RecomItemWrapper = styled.li`
  width: 150px;
  margin: 16px 37px 0 0;
  /* overflow: hidden; */
  &:nth-child(5n) {
    margin-right: 0px;
  }

  img {
    height: 150px;
    width: 150px;
  }

  h3.title {
    margin: 13px 0 6px;
    line-height: 16px;
    font-size: 14px;
    font-weight: normal;
    color: #333;
    word-wrap: break-word;
    white-space: normal;
    &:hover {
      text-decoration: underline;
    }
    /* word-break: break-word; */
  }
  .rcmd {
    color: #999;
    line-height: 18px;
    font-size: 12px;
  }
`
