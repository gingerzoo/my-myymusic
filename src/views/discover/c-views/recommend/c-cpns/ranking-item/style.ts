import styled from "styled-components"

export const RankItemWrapper = styled.div`
  .top {
    display: flex;
    width: 230px;
    height: 120px;
    padding: 20px 0 0 20px;

    .info {
      width: 116px;
      margin: 6px 0 0 10px;
      color: #333;
      font-weight: 700;

      .listName {
        &:hover {
          text-decoration: underline;
        }
      }

      .btn {
        height: 22px;
        width: 22px;
        margin: 10px 10px 0 0;
      }
      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list-item {
    font-size: 12px;
    padding-left: 50px;
    line-height: 32px;

    > .item {
      height: 32px;

      display: flex;
      &:nth-child(-n + 3) span {
        color: #c10d0c;
      }

      .song-count {
        float: left;
        text-align: center;
        width: 35px;
        height: 100%;
        font-size: 16px;
        margin-left: -35px;
      }
      .song-name {
        width: 180px;
        color: #000;
        &:hover {
          color: #000;
          text-decoration: underline;
        }
      }
    }
  }

  .more {
    height: 32px;
    line-height: 32px;
    margin-right: 32px;
    text-align: right;
    > a {
      color: #000;
      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
  }
`
