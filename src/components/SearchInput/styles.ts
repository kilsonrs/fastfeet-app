import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RectButton, TextInput } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 56px;
  margin: 0 24px -28px;
  border-radius: 4px;
  background: #fff;
  elevation: 1;
`;

export const Input = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  font-family: 'Inter-Medium';
  margin-left: 24px;
  color: #6f6c80;
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 24px;
`;

export const SearchResult = styled.View`
  position: absolute;
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  top: 52px;
  elevation: 1;
`;

export const SearchResultItem = styled(RectButton)`
  height: 56px;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #f7f5fa;
`;

export const SearchResultText = styled.Text`
  font-size: 15px;
  color: #4c33cc;
  /* color: #6f6c80; */
  margin-left: 24px;
`;
