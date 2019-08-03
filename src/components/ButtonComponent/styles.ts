import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import {
  colorBlack,
  colorGreyDark,
  colorWhite,
} from '../../styles/themes/theme';
import { MoveInBottom } from '../../styles/animations/MoveIn';

import ThemeInterface from './interface';

const animation = css`
  animation: ${MoveInBottom} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
`;

export const Container = styled.a`
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;

  background-color: ${colorWhite};
  color: ${colorGreyDark};

  ${(props: ThemeInterface) =>
    props.theme && props.theme.animation && animation}

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem ${rgba(colorBlack, 0.2)};
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem ${rgba(colorBlack, 0.2)};
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.6s;

    background-color: ${colorWhite};
  }

  &:hover::after {
    transform: scale(1.4, 1.6);
    opacity: 0;
  }
`;
