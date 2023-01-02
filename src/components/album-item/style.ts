import styled from "styled-components"
interface Iprops {
  picWidth: number
  coverWidth: number
  singleArtist: boolean
  coverPosition: string
  bigPlayIcon: boolean
}
export const AlbumItemWrapper = styled.div<Iprops>`
  position: relative;
  width: ${(props) => props.coverWidth + `px`};
  min-height: ${(props) => props.coverWidth + `px`};
  .al-img {
    margin-bottom: 7px;
    img {
      height: ${(props) => props.picWidth + `px`};
      width: ${(props) => props.picWidth + `px`};
    }

    a.cover {
      position: absolute;
      width: ${(props) => props.coverWidth + `px`};
      height: ${(props) => props.picWidth + `px`};
      left: 0;
      top: 0;
      background-position: ${(props) => props.coverPosition};
    }

    &:hover {
      a.play-icon {
        position: absolute;
        left: ${(props) => (props.bigPlayIcon ? `85px` : `72px`)};
        bottom: 47px;
        width: ${(props) => (props.bigPlayIcon ? `28px` : `22px`)};
        height: ${(props) => (props.bigPlayIcon ? `28px` : `22px`)};
        background-position: ${(props) =>
          props.bigPlayIcon ? `0 -140px` : `0px -85px`};
      }
    }
  }

  div.info {
    width: 90%;
    p {
      font-size: 12px;
      line-height: 18px;
    }
    .al-name {
      color: #000;
      /* word-wrap: break-word; */
    }

    .artist,
    .publishTime {
      color: #666;
    }
  }
`
