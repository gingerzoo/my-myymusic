import styled from "styled-components"

export const FooterWrapper = styled.div`
  position: relative;
  height: 325px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .enter {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    padding: 0 70px;
  }

  .unit {
    :nth-child(3) .footer-logo {
      background-position: -5px -170px;
    }
    .footer-logo {
      display: block;
      height: 45px;
      width: 45px;
      margin: 0 auto;

      /* 因为整张精灵图的大小是440*440  设置这个宽度相当于将精灵图缩小了一半 */
      background-size: 220px 220px;
    }
    :nth-child(1) .footer-logo {
      background-position: -170px -5px;
      &:hover {
        background-position: -5px -115px;
      }
    }

    :nth-child(2) .footer-logo {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }

    :nth-child(3) .footer-logo {
      background-position: -5px -60px;
      &:hover {
        background-position: -60px -5px;
      }
    }

    :nth-child(4) .footer-logo {
      background-position: -60px -60px;
      &:hover {
        background-position: -115px -5px;
      }
    }

    :nth-child(5) .footer-logo {
      background-position: -115px -115px;
      &:hover {
        background-position: -5px -5px;
      }
    }

    :nth-child(6) .footer-logo {
      background-position: -170px -115px;
      &:hover {
        background-position: -60px -115px;
      }
    }

    :nth-child(7) .footer-logo {
      background-position: -170px -60px;
      &:hover {
        background-position: -115px -60px;
      }
    }
  }

  .unit > .title {
    display: inline-block;
    width: 100px;
    margin-top: 10px;
    /* margin-left: -26px; */
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  .copyright {
    padding-top: 60px;
    color: #666;
    font-size: 12px;

    .right {
      display: flex;
      justify-content: center;
      line-height: 24px;

      .item:last-child .line {
        display: none;
      }

      > .item .line {
        margin: 0 8px;
      }
    }
    .right.p2 {
      a {
        margin-right: 14px;
      }
    }

    .right.p3 {
      .a1 {
        margin: 0 8px;
      }
      .badge {
        display: inline-block;
        /* height: 14px; */
        background-position: 0 4px;
        background-size: 14px 14px;
        padding-left: 18px;
      }
    }

    .right.p4 {
      span:first-child {
        margin-right: 10px;
      }
    }
  }
`
