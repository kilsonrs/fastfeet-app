import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  disabled?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: ${({ disabled }) => (disabled ? '#FBDB9E' : '#ffc042')};
  border-radius: 4px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Inter-Medium';
  font-size: 16px;
  color: ${({ disabled }) => (disabled ? '#A19EB0' : '#4c4766')};
`;
