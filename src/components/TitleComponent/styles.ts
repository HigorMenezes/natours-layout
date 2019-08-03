import styled, { css } from 'styled-components';
import TitleInterface from './interface';

import { MoveInRight, MoveInLeft } from '../../styles/animations/MoveIn';

const animation = css`
  animation: ${(props: TitleInterface) =>
      props.theme &&
      props.theme.animation &&
      props.theme.animation.moveIn === 'right'
        ? MoveInRight
        : MoveInLeft}
    1s ease-out;
`;

export const Container = styled.span`
  display: block;
  font-size: ${(props: TitleInterface) =>
    props.theme && props.theme.fontSize}rem;
  font-weight: ${(props: TitleInterface) =>
    props.theme && props.theme.fontWeight};
  letter-spacing: ${(props: TitleInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  padding-left: ${(props: TitleInterface) =>
    props.theme && props.theme.letterSpacing}rem;

  ${(props: TitleInterface) =>
    props.theme && props.theme.animation && animation};
`;
