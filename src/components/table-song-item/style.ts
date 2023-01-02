import styled from "styled-components"

interface Iprops {
  IsTopThree: boolean
}
export const TableSongItemWrapper = styled.tr<Iprops>`
  /* display: flex; */
  /* align-items: center; */
  width: 100%;
  font-size: 12px;
  /* border: 1px solid #d3d3d3; */
  &:nth-child(2n + 1) {
    background: #f5f5f5;
  }
  td {
    height: ${(props) => (props.IsTopThree ? "70px" : "30px")};
    padding: 6px 10px;
    color: #333;
    /* display: flex;
    align-items: center; */
  }

  .hd {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0 3px;
    .num {
      width: 25px;
      /* text-align: center; */
    }
    .new-icon {
      background-position: -67px -283px;
      width: 16px;
      height: 17px;
    }
  }

  .name-content {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    .pic {
      width: 50px;
      height: 50px;
      margin-right: 14px;
    }
    .fansl {
      flex: 1;
      padding-right: 25px;
    }
    .song-name {
      /* max-width: 85%; */
      padding-right: 25px;
      .subp {
        color: #aeaeae;
        font-style: normal;
      }
    }
    .play-icon {
      width: 17px;
      height: 17px;
      margin-right: 8px;
      background-position: 0 -103px;
      &:hover {
        background-position: 0 -128px;
      }
      &:visited {
        background-position: -20px -128px;
      }
    }
    .mv-icon {
      position: absolute;
      display: inline-block;
      width: 23px;
      height: 17px;
      top: 0;
      right: 0;
      margin-left: 1px;
      background-position: 0 -151px;
    }
    .icon {
      cursor: pointer;
    }
  }

  .duration-oper:hover {
    .duration {
      display: none;
    }
    .operator {
      display: flex;
    }
    .btn {
      width: 16px;
      height: 16px;
    }
    .add-icon {
      background-position: 0 -700px;
      &:hover {
        background-position: -22px -700px;
      }
    }
    .collect-icon {
      background-position: -1px -174px;
      &:hover {
        background-position: -21px -174px;
      }
    }
    .share-icon {
      background-position: -1px -195px;
      &:hover {
        background-position: -21px -195px;
      }
    }
    .download-icon {
      background-position: -83px -174px;
      &:hover {
        background-position: -106px -174px;
      }
    }
  }
`
