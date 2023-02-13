import styled from "styled-components"

export const OpeBarWrapper = styled.div`
  margin: 12px 0 45px;
  .icon {
    display: inline-block;
    height: 31px;
    line-height: 31px;
    text-align: center;
    margin-right: 10px;
    padding-right: 5px;
    i {
      display: inline-block;
      height: 31px;
      color: #333;
      font-style: normal;
    }
  }
  .favor {
    background-position: right -100px;
    i {
      background-position: 0 -59px;
      padding: 0 5px 0 10px;

      /* vertical-align: middle; */

      em {
        display: inline-block;
        width: 17px;
        height: 15px;
        margin: 8px 6px 0 0;
        /* margin-right: 6px; */
        background-position: 0 -95px;
      }
    }
  }

  .subsribe {
    background-position: right -1020px;
    i {
      background-position: 0 -977px;
      padding: 0 2px 0 28px;
    }
  }
  .share {
    background-position: right -1020px;
    i {
      background-position: 0 -1225px;
      padding: 0 2px 0 28px;
    }
  }
`
