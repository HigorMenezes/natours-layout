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
    top: 4rem;
    left: 4rem;

    .logo {
      height: 3.5rem;
    }
  }

  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    backface-visibility: hidden;

    .heading-primary {
      color: #ffffff;
      text-transform: uppercase;
      margin-bottom: 6rem;

      .heading-primary-main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
        padding-left: 3.5rem;

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
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.74rem;
        padding-left: 1.74rem;

        animation: moveInRight 1s ease-out;
      }
    }

    .btn:link,
    .btn:visited {
      font-size: 1.6rem;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 700;
      padding: 1.5rem 4rem;
      display: inline-block;
      border-radius: 10rem;
      transition: all 0.2s;
    }

    .btn:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }

    .btn:active {
      transform: translateY(-0.1rem);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }

    .btn-white {
      background-color: #fff;
      color: #777;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
