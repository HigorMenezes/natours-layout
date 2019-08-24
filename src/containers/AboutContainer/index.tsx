import React from 'react';

import { Container } from './styles';

import TypographyComponent from '../../components/TypographyComponent';
import CenterTextComponentUtil from '../../utils/components/CenterTextComponentUtil';
import GridComponent from '../../components/GridComponent';

const AboutContainer = () => (
  <Container>
    <CenterTextComponentUtil>
      <TypographyComponent variant='h2' theme={{ fontSize: 3.5 }}>
        Exciting tours for adventurous people
      </TypographyComponent>
      <GridComponent container theme={{ gutterVertical: 1 }}>
        <GridComponent item theme={{ xl: 4, gutterHorizontal: 1 }}>
          <h1>Hello 3</h1>
        </GridComponent>
        <GridComponent item theme={{ xl: 3, gutterHorizontal: 1 }}>
          <h1>Hello 3</h1>
        </GridComponent>
        <GridComponent item theme={{ xl: 5 }}>
          <h1>Hello 5</h1>
        </GridComponent>
      </GridComponent>
      <GridComponent container>
        <GridComponent item theme={{ xl: 6, gutterHorizontal: 1 }}>
          <h1>Hello 6</h1>
        </GridComponent>
        <GridComponent item theme={{ xl: 3, gutterHorizontal: 1 }}>
          <h1>Hello 3</h1>
        </GridComponent>
        <GridComponent item theme={{ xl: 3 }}>
          <h1>Hello 3</h1>
        </GridComponent>
      </GridComponent>
    </CenterTextComponentUtil>
  </Container>
);

export default AboutContainer;
