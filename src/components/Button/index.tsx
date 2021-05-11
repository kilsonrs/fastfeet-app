import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, ...rest }) => (
  <Container onPress={onPress} {...rest}>
    <ButtonText>{title}</ButtonText>
  </Container>
);

export { Button };
