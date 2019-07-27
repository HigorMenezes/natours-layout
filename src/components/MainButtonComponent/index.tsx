import React from 'react';

import { Container } from './styles';
import MainButtonInterface from './interface';

const MainButtonComponent = (props: MainButtonInterface) => (
  <Container href={props.href}>{props.children}</Container>
);

export default MainButtonComponent;
