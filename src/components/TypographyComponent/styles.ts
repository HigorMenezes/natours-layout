import styled from 'styled-components';
import { rgba } from 'polished';

import TypographyInterface from './interface';

import {
  colorBlack,
  colorPrimaryLight,
  colorPrimaryDark,
} from '../../styles/themes/theme';

export const H2Container = styled.h2`
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2rem;

  display: inline-block;
  background-image: linear-gradient(
    to right,
    ${colorPrimaryLight},
    ${colorPrimaryDark}
  );

  -webkit-background-clip: text;
  color: transparent;

  transition: all 0.2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem ${rgba(colorBlack, 0.2)};
  }
`;
