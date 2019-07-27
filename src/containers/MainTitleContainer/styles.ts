import styled from 'styled-components';

import { colorWhite } from '../../theme';

export const Container = styled.h1`
  color: ${colorWhite};
  text-transform: uppercase;
  margin-bottom: 6rem;

  .heading-primary--main {
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

  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.74rem;
    padding-left: 1.74rem;

    animation: moveInRight 1s ease-out;
  }
`;
