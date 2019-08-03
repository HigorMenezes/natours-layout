import styled from 'styled-components';

import { clearFix } from '../../styles/functions/clearFix';

const gridWidth = '114rem';
const gutterVertical = '8rem';
const gutterHorizontal = '6rem';

export const Container = styled.section`
  .row {
    max-width: ${gridWidth};
    background-color: #eee;
    margin: 0 auto;
    ${clearFix}

    &:not(:last-child) {
      margin-bottom: ${gutterVertical};
    }

    [class^='col-'] {
      background-color: orange;
      float: left;

      &:not(:last-child) {
        margin-right: ${gutterHorizontal};
      }
    }

    .col-1-of-2 {
      width: calc((100% - ${gutterHorizontal}) / 2);
    }

    .col-1-of-3 {
      width: calc((100% - 2 * ${gutterHorizontal}) / 3);
    }

    .col-1-of-4 {
      width: calc((100% - 3 * ${gutterHorizontal}) / 4);
    }

    .col-2-of-3 {
      width: calc(
        2 * ((100% - 2 * ${gutterHorizontal}) / 3) + ${gutterHorizontal}
      );
    }

    .col-2-of-4 {
      width: calc(
        2 * ((100% - 3 * ${gutterHorizontal}) / 4) + ${gutterHorizontal}
      );
    }

    .col-3-of-4 {
      width: calc(
        3 * ((100% - 3 * ${gutterHorizontal}) / 4) + 2 * ${gutterHorizontal}
      );
    }
  }
`;
