import styled from "styled-components"

interface Ioooo {
  isPlay: boolean
}
export const MvPlayWrapper = styled.div<Ioooo>`
  margin-top: -23px;
  .title {
    display: flex;
    margin-bottom: 8px;
    h2 {
      font-size: 24px;
      line-height: 32px;
      margin-right: 8px;
      .mv-icon {
        display: inline-block;
        width: 29px;
        height: 18px;
        margin: 7px 5px auto auto;
        background-position: -230px -480px;
      }
    }
    a {
      color: #0c73c2;
      align-self: end;
      /* line-height: 17px; */
      margin-bottom: 2px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .video-box {
    position: relative;
  }
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* opacity: ${(props) => (props.isPlay ? 0 : 1)}; */
    background: rgba(255, 255, 255, 0);
    /* background-color: plum; */
  }

  .play {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 74px;
    height: 74px;
    transform: translate(-50%, -50%);
    opacity: ${(props) => (props.isPlay ? 1 : 0)};

    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAwFBMVEUAAAATExMlJSUHBweRkZH///////9HcEz09PT///////////////8cHBz///+0tLT////////////b29vy8vLv7+////////98fHz///9AQEA3Nzf////Pz8////9lZWXDw8P////////////e3t6bm5vY2Njw8PCxsbH///+5ublgYGBdXV3////////////k5ORdXV0wMDDt7e2mpqb////h4eF4eHhCQkKNjY3JyclPT0/U1NTQ0NDc3Nzg4ODNvLiUAAAAQHRSTlNmaGlnc2F+APCABx95aWR3DVMKe+1+WitxSmtrA3pxb3g+Imh8oNDrr1d4b244OiXbg3Pnp3fYjnmZwn7Lx9R8wCePZgAAAi9JREFUSMell9da3DAQhcdVc9zLFrb3Ql3CsoEEkrz/W+WCJWAsW3J8Lm39n+yZ0dEMCam8wyKNpgEQTKN0cfDkq0jyLLmLXBTkRneJFuz3XABzezY0DSLDHM7sOQC35yth3wEQ31hUkHUTA3D8WjhJgdw2SCLDzoE0qYb7Abo2VcruIuhXwOMBEJtUIzMGBmMZ7DnABSl0AThZGc5W+DMipUY5VtlX2FthYpKGwglWXhEeO5iERJq0My7AA6xN0pS5xuAz3AdGpK0R0P+Ak0Ad52LMg+QffImYGinG5Tu8RDdsBoddLM+wA5sayobzBvvIqbFy+EKQED3Zxpvd9ql+654QJDIXkjN4z8w/H6phA24mSNziSvJyx8x8/FFNX+FWkHBwLXnHb3p9roKv4QjyXFjVMO82lhy24Hp0wJxqYObti5ye40ALeZI/YN49WvJ4LyjFTAEzf/8mWTFDShGGSpg7+3I2h4hoClMNM9+XNjcxpQCGDsy7TalMAgJIC2bef1kCNICPpURrf3Zp5xAn3YBx51ESMK1UyVI9RKRVJNzZW9IiUZcn8++XivJUHoyq2p7joDqSzNvn6iNZbwZ83NSZQYUNndlfD/U2JDfAdw+z6g1Qbr0q9zxbr9z0N8fXJx3Tb3XdtLvoWl2x7S73Vm2FEAOstX87zIsNTbtWSmRNmrhM0j6u/7d9bNe4tmuZ2zXrLccE1YCybDQaWVaj0ajlUPZpHDy57qluHPwLCJFHIPLGbYAAAAAASUVORK5CYII=)
      no-repeat center center;
  }
`
