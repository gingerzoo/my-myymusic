import styled from "styled-components"

export const AlphHeaderWrapper = styled.ul`
  display: flex;
  margin-top: 20px;
  .alph-item {
    width: 21px;
    margin-left: 3px;
    line-height: 24px;
    font-size: 14px;
    color: #000;
    text-align: center;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    &.isActive {
      background: #c20c0c;
      border-radius: 2px;
      color: #fff;
    }
    &:nth-child(1) {
      width: 45px;
      margin: 0;
    }
    &:nth-last-child(1) {
      width: 45px;
      font-size: 12px;
      color: #333;
    }
  }
`
