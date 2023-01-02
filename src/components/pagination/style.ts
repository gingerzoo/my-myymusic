import styled from "styled-components"

export const PaginatonWrapper = styled.div`
  margin: 20px auto;
  text-align: center;

  .control {
    width: 70px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 2px;
    &:hover {
      border: 1px solid #ccc;
      border-radius: 2px;
    }
  }
  .prev {
    background-position: 0 -591px;
    padding-left: 15px;
  }
  .next {
    background-position: -75px -591px;
    padding-right: 15px;
  }

  .ant-pagination-item {
    height: 22px;
    width: 22px;
    max-width: 0 !important;
    line-height: 22px;
    padding: 0;
    &:hover {
      color: pink;
      border: 1px solid #000;
    }
    &.ant-pagination-item-active {
      color: black;
      background: url(${require("@/assets/img/sprite_button2.png")});
      background-position: 0 -650px;
      border-color: #a2161b;
    }
  }
  /* background-position: 0 -650px;
    border-color: #A2161B; */
`
