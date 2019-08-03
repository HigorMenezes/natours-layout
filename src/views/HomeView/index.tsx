import React from 'react';

import { Container } from './styles';

import HeaderContainer from '../../containers/HeaderContainer';
import AboutContainer from '../../containers/AboutContainer';

const HomeView = () => (
  <Container>
    <HeaderContainer />
    <main>
      <AboutContainer />
    </main>
  </Container>
);

export default HomeView;
