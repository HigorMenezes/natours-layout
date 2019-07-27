import styled from 'styled-components';
import MainTitleInterface from './interface';

export const Container = styled.span`
  display: block;
  font-size: ${(props: MainTitleInterface) => props.theme.fontSize}rem;
  font-weight: ${(props: MainTitleInterface) => props.theme.fontWeight};
  letter-spacing: ${(props: MainTitleInterface) =>
    props.theme.letterSpacing}rem;
  padding-left: ${(props: MainTitleInterface) => props.theme.letterSpacing}rem;

  animation: ${(props: MainTitleInterface) =>
      props.theme.animation === 'right' ? 'moveInRight' : 'moveInLeft'}
    1s ease-out;

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
