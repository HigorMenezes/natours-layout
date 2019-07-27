import React from 'react';

import { Container } from './styles';

import LogoComponent from '../../components/LogoComponent';
import MainButtonComponent from '../../components/MainButtonComponent';
import MainTitleContainer from '../MainTitleContainer';

const HeaderContainer = () => (
  <Container>
    <div className='header__logo-box'>
      <LogoComponent />
    </div>
    <div className='header__text-box'>
      <MainTitleContainer />
      <MainButtonComponent href='/'>Discovery our tours</MainButtonComponent>
    </div>
  </Container>
);

export default HeaderContainer;
