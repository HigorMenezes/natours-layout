import React from 'react';

import { H2Container } from './styles';
import TypographyInterface from './interface';

const TypographyComponent = (props: TypographyInterface) =>
  (props.variant === 'h2' && <H2Container {...props} />) || (
    <h1>{props.children}</h1>
  );

export default TypographyComponent;
