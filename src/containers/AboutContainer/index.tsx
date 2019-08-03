import React from 'react';

import { Container } from './styles';

import TypographyComponent from '../../components/TypographyComponent';
import CenterTextComponentUtil from '../../utils/components/CenterTextComponentUtil';

const AboutContainer = () => (
  <Container>
    <CenterTextComponentUtil>
      <TypographyComponent variant='h2' theme={{ fontSize: 3.5 }}>
        Exciting tours for adventurous people
      </TypographyComponent>
    </CenterTextComponentUtil>
  </Container>
);

export default AboutContainer;
