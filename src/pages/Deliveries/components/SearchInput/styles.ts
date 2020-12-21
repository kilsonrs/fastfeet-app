import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 56px;
  margin: -28px 24px 0;
  border-radius: 4px;
  background: #f7f5fa;
  elevation: 1;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'Inter-Medium';
  margin-left: 24px;
  color: #6f6c80;
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 24px;
`;
