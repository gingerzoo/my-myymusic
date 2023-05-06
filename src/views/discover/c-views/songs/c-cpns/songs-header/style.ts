import styled from "styled-components"

export const SongHDWrapper = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  .header-left {
    position: relative;
    display: flex;
    .title {
      font-size: 24px;
    }
    .category {
      display: inline-block;
      /* position:relative; */
      height: 31px;
      width: 91px;
      margin-left: 12px;
      line-height: 28px;
      text-align: center;
      /* vertical-align: top; */
      color: #0c73c2 !important;
      border: 1px solid pink;

      .choose-all {
        pointer-events: none;
      }
      em {
        /* position:absolute;
        top:10px; */
        display: inline-block;
        width: 8px;
        height: 5px;
        vertical-align: middle;
        background-position: -70px -543px;
        margin-left: 5px;
      }
    }
  }
  .header-right {
    /* width: 46px;
    height: 29px; */
    background-position: 0 0;
    height: 29px;
    border-radius: 3px;
    a {
      display: inline-block;
      width: 46px;
      height: 29px;
      color: #fff;
      line-height: 29px;
      text-align: center;
    }
  }
`
