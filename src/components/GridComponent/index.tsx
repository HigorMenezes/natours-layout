import React from 'react';

import { Container, Item } from './styles';

import { GridInterface } from './interface';

const GridComponent = (props: GridInterface) =>
  (props.container && <Container {...props} />) ||
  (props.item && <Item {...props} />) || <Container {...props} />;

export default GridComponent;
