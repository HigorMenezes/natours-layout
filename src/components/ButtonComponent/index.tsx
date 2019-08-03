import React from 'react';

import { Container } from './styles';
import ButtonInterface from './interface';

const ButtonComponent = (props: ButtonInterface) => <Container {...props} />;

export default ButtonComponent;
