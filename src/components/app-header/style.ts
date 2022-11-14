import styled from "styled-components"

export const HeaderWrapper = styled.div`
  background-color: #242424;
  .header {
    display: flex;
    justify-content: space-between;
    height: 70px;

    background: #242424;
  }

  .divider {
    background-color: #c20c0c;
    height: 5px;
  }
`
//高度不会继承啊！！！！行高才会继承
//当符合css默认“继承”的情况下（子元素必须是块级元素且无定位或浮动），是不需要写width属性，就可以默认“继承”的。

export const LeftWrapper = styled.div`
  display: felx;
  .logo {
    display: block;
    width: 177px;
    height: 70px;
    line-height: 70px;
    background-position: 0 0px;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    /* 这里不能用align-items的原因是 ???? */
    /* align-items: center; */
    line-height: 70px;
    .select-item {
      position: relative;
      background-position: -266px 0;
      a {
        display: block;
        padding: 0 20px;
      }

      &:last-of-type a::after {
        position: absolute;
        content: "";
        width: 28px;
        height: 18px;
        /* 为啥这样写不行呢 */
        /* background-image: url("@/assets/img/sprite_01.png"); */
        background-image: url(${require("@/assets/img/sprite_01.png")});

        background-position: -190px 0;
        top: 16px;
        right: -5px;
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
      }

      .active .icon {
        position: absolute;
        bottom: -1px;
        /* left: 50%;这个百分数的参考对象是最近定位的祖先元素
         transform: translate(-50%, 0)：这个百分数相对的是自身的宽度 */

        /* left: 50%;
        transform: translate(-50%, 0);  */

        left: 0;
        right: 0;
        margin: 0 auto;

        width: 12px;
        height: 7px;
        background-position: -226px 0;
      }
    }
  }
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  .input {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    font-size: 12px;
    border: none;
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 30px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #4f4f4f;
    margin: 0 12px;

    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }
`
