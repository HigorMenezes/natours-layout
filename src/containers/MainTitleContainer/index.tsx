import React from 'react';

import { Container } from './styles';

import TitleComponent from '../../components/TitleComponent';

const MainTitleContainer = () => (
  <Container>
    <TitleComponent
      theme={{
        fontSize: 6,
        fontWeight: 400,
        letterSpacing: 3.5,
        animation: {
          moveIn: 'left',
        },
      }}
    >
      outdoors
    </TitleComponent>
    <TitleComponent
      theme={{
        fontSize: 2,
        fontWeight: 700,
        letterSpacing: 1.74,
        animation: {
          moveIn: 'right',
        },
      }}
    >
      is where life happens
    </TitleComponent>
  </Container>
);

export default MainTitleContainer;
