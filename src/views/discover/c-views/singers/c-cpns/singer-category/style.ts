import styled from "styled-components"

export const SingerCateWrapper = styled.div`
  padding: 0 10px 40px;
  margin-top: 51px;
  height: 3px;
  height: 3px;
  h3.title {
    height: 25px;
    padding-left: 14px;
    font-size: 16px;
    font-weight: 700;
    font-family: "Microsoft Yahei";
  }
  ul > li {
    width: 160px;
    height: 29px;
    line-height: 29px;
    a {
      display: inline-block;
      width: 133px;
      padding-left: 27px;
      background-position: 0 -30px;
      color: #333;
      &.isActive {
        background-position: 0 0;
        text-decoration: none;
        color: #c20c0c;
      }
    }
  }
  .cate-item {
    margin: 5px 0 0;
    padding-top: 16px;
    border-top: 1px solid #d3d3d3;
  }
`
