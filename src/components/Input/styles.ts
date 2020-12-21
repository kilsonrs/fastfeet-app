import styled, { css } from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface ContainterProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainterProps>`
  flex-direction: row;
  align-items: center;
  background-color: #f7f5fa;
  width: 100%;
  height: 56px;
  border-radius: 4px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-width: 1.5px;
  border-color: #4c33cc;
  ${props =>
    props.isFocused &&
    css`
      border-color: #ffc042;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'Inter-Medium';
  color: #6f6c80;
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 20px;
`;
