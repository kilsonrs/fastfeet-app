import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  ...rest
}) => (
  <Container disabled={disabled} onPress={onPress} {...rest}>
    <ButtonText>{title}</ButtonText>
  </Container>
);

export { Button };
