import styled from "styled-components"

export const NewAlbumWrapper = styled.div`
  margin-top: 10px;

  .content {
    position: relative;
    /* display: flex;
    align-items: center; */
    height: 186px;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 25px 25px;
  }

  .ablum {
    width: 640px;
    height: 150px;
    /* .ant-carousel .slick-slide {
      height: 150px;
      overflow: hidden;
    } */
  }

  .album-list {
    /* 这个flex最开始没有生效！！！！最后查明原因是antd的Carousel组件的一些内联样式（权重很大！）有影响

        因为Carousel组肯定会给直接包含的子元素（亲儿子）设置样式  所以解决办法是再嵌套一层
        */
    display: flex;
    justify-content: space-between !important;
  }

  .arrow {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  .arrow-left {
    background-position: -260px -75px;
    left: 4px;
  }

  .arrow-right {
    background-position: -300px -75px;
    right: 4px;
  }
`
