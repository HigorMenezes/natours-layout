import React from 'react';

import { Container } from './styles';

import LogoComponent from '../../components/LogoComponent';
import ButtonComponent from '../../components/ButtonComponent';
import MainTitleContainer from '../MainTitleContainer';

const HeaderContainer = () => (
  <Container>
    <div className='header__logo-box'>
      <LogoComponent />
    </div>
    <div className='header__text-box'>
      <MainTitleContainer />
      <ButtonComponent theme={{ animation: { moveIn: 'bottom' } }} href='/'>
        Discovery our tours
      </ButtonComponent>
    </div>
  </Container>
);

export default HeaderContainer;
