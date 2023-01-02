import styled from "styled-components"

export const SingerAlphWrapper = styled.div`
  border-top: 1px dotted #333;
  /* padding-bottom: 5px; */
  .singer-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    /* border-top: 1px dotted #f5f5f5; */
  }
  .singer-item {
    display: flex;
    align-items: center;
    height: 30px;
    width: 130px;
    /* padding-left: 17px; */
    line-height: 23px;
    /* justify-content: space-between; */
    font-size: 14px;
    color: #000;
    /* 哇这个属性第一次见，表示允许的文字行数 */
    /* line-clamp: 2;
    text-overflow: ellipsis; */
    margin-top: 8px;
    a {
      font-size: 12px;
    }
    .sign_icon {
      width: 17px;
      height: 18px;
      margin-left: 2px;
      background-position: 0 -740px;
    }
  }
`
