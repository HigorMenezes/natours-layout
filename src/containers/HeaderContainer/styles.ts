import styled from 'styled-components';
import heroImg from '../../resources/images/hero.jpg';
import { alphaLightGreen, alphaDarkGreen } from '../../theme';

export const Container = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right,
      ${alphaLightGreen},
      ${alphaDarkGreen}
    ),
    url(${heroImg});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;

  .logo-box {
    position: absolute;
    top: 40px;
    left: 40px;

    .logo {
      height: 35px;
    }
  }

  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .heading-primary {
      color: #ffffff;
      text-transform: uppercase;
      backface-visibility: hidden;
      margin-bottom: 60px;

      .heading-primary-main {
        display: block;
        font-size: 60px;
        font-weight: 400;
        letter-spacing: 35px;
        padding-left: 35px;

        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        /*
        animation-delay: 3s;
        animation-iteration-count: 3;
        */
      }

      .heading-primary-sub {
        display: block;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 17.4px;
        padding-left: 17.4px;

        animation: moveInRight 1s ease-out;
      }
    }

    .btn:link,
    .btn:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 15px 40px;
      display: inline-block;
      border-radius: 100px;
      transition: all 0.2s;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn-white {
      background-color: #fff;
      color: #777;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    80% {
      transform: translateX(-10px);
    }

    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }
`;
