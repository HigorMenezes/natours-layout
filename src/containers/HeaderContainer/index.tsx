import React from 'react';

import { Container } from './styles';

import logoImg from '../../resources/images/logo-white.png';

const HeaderContainer = () => (
  <Container>
    <div className='header__logo-box'>
      <img src={logoImg} alt='Logo' className='header__logo' />
    </div>
    <div className='header__text-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary--main'>outdoors</span>
        <span className='heading-primary--sub'>is where life happens</span>
      </h1>

      <a href='/' className='btn btn--white btn--animated'>
        Discovery our tours
      </a>
    </div>
  </Container>
);

export default HeaderContainer;
