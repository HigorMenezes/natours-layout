import React from 'react';

import { Container } from './styles';
import CenterTextInterface from './interface';

const CenterTextComponentUtil = (props: CenterTextInterface) => (
  <Container {...props} />
);

export default CenterTextComponentUtil;
