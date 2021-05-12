import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  justify-content: space-between;
  height: 218px;
  width: 100%;
  background: #fff;
  padding: 16px;
  margin-vertical: 24px;
  border-radius: 4px;
  elevation: 1;
`;

export const DataContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const DataIcon = styled(Icon)``;

export const DataText = styled.Text`
  margin-left: 16px;
  font-family: 'RobotoCondensed-Bold';
  font-size: 22px;
  color: #4c4766;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const InfoContent = styled.View`
  flex: 1;
`;

export const InfoTitle = styled.Text`
  color: #4c4766;
  font-family: 'Inter-Bold';
  font-size: 10px;
  margin: 24px 0 8px;
`;

export const InfoStatus = styled.Text`
  color: #6f6c80;
  font-family: 'Inter-Regular';
  font-size: 15px;
`;
