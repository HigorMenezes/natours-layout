import React from 'react';

import { Container } from './styles';

import MainTitleInterface from './interface';

const MainTitleComponent = (props: MainTitleInterface) => (
  <Container theme={props.theme}>{props.children}</Container>
);

export default MainTitleComponent;
