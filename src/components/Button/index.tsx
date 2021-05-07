import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{title}</ButtonText>
  </Container>
);

export { Button };
