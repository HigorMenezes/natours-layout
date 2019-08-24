import styled, { css } from 'styled-components';

import { GridInterface } from './interface';

import { clearFix } from '../../styles/functions/clearFix';

export const Container = styled.div`
  ${(props: GridInterface) =>
    props.theme &&
    props.theme.gridWidth &&
    css`
      max-width: ${props.theme.gridWidth}%;
    `};
  margin: 0 auto;
  ${clearFix}

  ${(props: GridInterface) =>
    props.theme &&
    props.theme.gutterVertical &&
    css`
      margin-bottom: ${props.theme.gutterVertical}rem;
    `}
`;

export const Item = styled.div`
  float: left;

  ${(props: GridInterface) =>
    props.theme &&
    props.theme.gutterHorizontal &&
    css`
      margin-right: ${props.theme.gutterHorizontal}rem;
    `}
  ${(props: GridInterface) =>
    props.theme &&
    props.theme.xl &&
    css`
      width: calc(
        ${(props.theme.xl / 12) * 100}% -
          ${props.theme.gutterHorizontal || 0}rem
      );
    `}
`;
