import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: #ffc042;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 16px;
  color: #4c4766;
`;
