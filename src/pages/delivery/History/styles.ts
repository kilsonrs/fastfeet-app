import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { IDelivery } from '../../../dtos/IDelivery';

export const Container = styled.View`
  flex: 1;
  background: #f7f5fa;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -4px;
`;

export const Title = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 16px;
  color: #4c4766;
`;

export const DeliveryList = styled(
  FlatList as new () => FlatList<IDelivery>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;
