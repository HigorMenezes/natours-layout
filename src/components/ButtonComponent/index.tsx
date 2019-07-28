import React from 'react';

import { Container } from './styles';
import ButtonInterface from './interface';

const ButtonComponent = (props: ButtonInterface) => (
  <Container theme={props.theme} href={props.href}>
    {props.children}
  </Container>
);

export default ButtonComponent;
