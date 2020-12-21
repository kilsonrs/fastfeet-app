import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Package from '../../assets/Package.png';
import Waiting from '../../assets/Waiting.png';

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

interface CardProps {
  title: string;
  onPress(): void;
}

const Card: React.FC<CardProps> = ({ title, onPress }) => {
  return (
    <Container>
      <Content>
        <PackageContent>
          <PackageImage source={Package} />
          <PackageTitle>{title}</PackageTitle>
          <PackageDate>01/07/2020</PackageDate>
        </PackageContent>
      </Content>
      <Image source={Waiting} />
      <DetailButton onPress={onPress}>
        <DetailButtonText>Detalhes</DetailButtonText>
        <Icon name="arrow-right-alt" size={24} color="#6F6C80" />
      </DetailButton>
    </Container>
  );
};

export default Card;
