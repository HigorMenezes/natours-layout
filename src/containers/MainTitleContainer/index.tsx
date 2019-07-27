import React from 'react';

import { Container } from './styles';

import MainTitleComponent from '../../components/MainTitleComponent';

const MainTitleContainer = () => (
  <Container>
    <MainTitleComponent
      theme={{
        fontSize: 6,
        fontWeight: 400,
        letterSpacing: 3.5,
        animation: 'left',
      }}
    >
      outdoors
    </MainTitleComponent>
    <MainTitleComponent
      theme={{
        fontSize: 2,
        fontWeight: 700,
        letterSpacing: 1.74,
        animation: 'right',
      }}
    >
      is where life happens
    </MainTitleComponent>
  </Container>
);

export default MainTitleContainer;
