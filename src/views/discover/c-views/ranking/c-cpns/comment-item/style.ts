import styled from "styled-components"

export const CommentItemWrapper = styled.div`
  display: flex;
  /* width: 100%; */
  padding: 15px 0;
  font-size: 12px;
  border-top: 1px dotted #ccc;
  .comment-detail {
    flex: 1;
    //为什么为什么为什么！！！！！！！！！！！！！！！
    width: 0;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
  }
  .favor-comm {
    display: flex;
    align-items: center;
  }
  .like-icon {
    width: 15px;
    height: 14px;
    background-position: -150px 0px;
    margin-right: 5px;
    &:hover {
      background-position: -150px -20px;
    }
    &:visited {
      background-position: -170px 0;
    }
  }
  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .user-info {
    /* padding-top: 2px; */
    line-height: 20px;
    word-wrap: break-word;
    white-space: normal;
    .user-name {
      margin-right: 5px;
    }
    .vip-icon {
      margin-right: 5px;
    }
    img {
      height: 12px;
      vertical-align: -1px;
    }
  }
  .bottom-info {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-top: 15px;

    .divider {
      margin: 0 8px;
    }
  }
`
