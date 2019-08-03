import React from 'react';

import { Container } from './styles';

import HeaderContainer from '../../containers/HeaderContainer';
import GridTestContainer from '../../containers/GridTestContainer';

const HomeView = () => (
  <Container>
    <HeaderContainer />
    <GridTestContainer />
  </Container>
);

export default HomeView;
