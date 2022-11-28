import styled from "styled-components"

export const PlayPanelWrapper = styled.div`
  position: absolute;
  width: 986px;
  height: 301px;
  bottom: 47px;
  > .panel-content {
    position: relative;
    display: flex;
    font-size: 12px;

    margin-top: 0;
    img {
      position: absolute;
      width: 980px;
      height: 260px;
      left: 2px;
      opacity: 0.2;
      overflow: hidden;
    }
  }
`
