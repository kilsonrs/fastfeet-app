import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Package from '../../assets/Package.png';

import {
  Container,
  Content,
  PackageContent,
  PackageImage,
  PackageTitle,
  PackageDate,
  DetailButton,
  DetailButtonText,
} from './styles';
import { IDelivery } from '../../dtos/IDelivery';
import DeliveryProgress from '../DeliveryProgress';

interface DeliveryCardProps {
  delivery: IDelivery;
  onPress(): void;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ delivery, onPress }) => {
  const { status } = delivery;

  return (
    <Container>
      <Content>
        <PackageContent>
          <PackageImage source={Package} />
          <PackageTitle numberOfLines={1}>{delivery.package_name}</PackageTitle>
          <PackageDate>{delivery.created_at}</PackageDate>
        </PackageContent>
        <DeliveryProgress status={status} />
      </Content>
      <DetailButton onPress={onPress}>
        <DetailButtonText>Detalhes</DetailButtonText>
        <Icon name="arrow-right-alt" size={24} color="#6F6C80" />
      </DetailButton>
    </Container>
  );
};

export { DeliveryCard };
