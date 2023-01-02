import styled from "styled-components"

export const RadioHeaderWrapper = styled.div`
  position: relative;
  ul.page {
    display: flex !important;
    flex-wrap: wrap;
    margin-bottom: 20px;
    li.cate-item {
      display: inline-block;
      width: 70px;
      height: 70px;
      text-align: center;
      margin: 0 33px 25px 0;
      .cate-name {
        font-size: 12px;
        margin-top: -3px;
        /* line-height: 18px; */
      }
      &:hover {
        background-position: 0 0;
      }
    }
    li.cate-item:nth-child(9n) {
      margin-right: 0;
    }
    li.link-active {
      background-position: -70px 0px;
      .image {
        background-position: -48px 0;
      }
    }
  }

  .arrow {
    position: absolute;
    top: 33%;
    width: 20px;
    height: 30px;
    opacity: 0.25;
    &:hover {
      opacity: 0.5;
    }
  }
  .arrow-left {
    background-position: 0 -30px;
    left: -26px;
  }
  .arrow-right {
    background-position: -30px -30px;
    right: -26px;
  }

  .ant-carousel {
    .dots {
      /* bottom: 5px; */
      li {
        width: 20px;
        height: 20px;
        /* background-position: -30px 0; */
        display: flex;
        align-items: center;

        button {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #aaa;
        }
      }

      li.slick-active {
        /* width: 20px; */
        button {
          background-color: #c20c0c;
        }
      }
    }
  }
`

interface IcateIamge {
  imgUrl: string
}
export const CateImageWrapper = styled.div<IcateIamge>`
  width: 48px;
  height: 48px;
  margin: 2px auto 0;
  background: url(${(props) => props.imgUrl}) 0 0;
`
