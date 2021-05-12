/* eslint-disable no-nested-ternary */
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Package from '../../assets/Package.png';
import Waiting from '../../assets/Waiting.png';
import Picked from '../../assets/Picked.png';
import Delivered from '../../assets/Delivered.png';

import {
  Container,
  PackageContent,
  PackageImage,
  PackageTitle,
  PackageDate,
  DetailButton,
  DetailButtonText,
  Content,
} from './styles';
import { IDelivery } from '../../dtos/IDelivery';

interface DeliveryCardProps {
  delivery: IDelivery;
  onPress(): void;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ delivery, onPress }) => {
  const { status } = delivery;

  const imageStatus =
    status === 'pendente'
      ? Waiting
      : status === 'entregue'
      ? Delivered
      : Picked;

  return (
    <Container>
      <Content>
        <PackageContent>
          <PackageImage source={Package} />
          <PackageTitle numberOfLines={1}>{delivery.package_name}</PackageTitle>
          <PackageDate>{delivery.created_at}</PackageDate>
        </PackageContent>
      </Content>
      <Image source={imageStatus} />
      <DetailButton onPress={onPress}>
        <DetailButtonText>Detalhes</DetailButtonText>
        <Icon name="arrow-right-alt" size={24} color="#6F6C80" />
      </DetailButton>
    </Container>
  );
};

export { DeliveryCard };
