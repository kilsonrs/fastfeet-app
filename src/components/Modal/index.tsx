import React, { useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Content,
  MessageImage,
  MessageTitle,
  MessageDescription,
} from './styles';

import errorImage from '../../assets/Erro.png';
import doneImage from '../../assets/Feito.png';

interface ModaProps {
  type: string;
  title: string;
  description?: string;
  nextPage: string;
}

const Modal: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { type, title, description, nextPage } = route.params as ModaProps;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(nextPage);
    }, 2000);
  }, [navigation, nextPage]);

  return (
    <Container>
      <Content>
        <MessageImage source={type === 'error' ? errorImage : doneImage} />
        <MessageTitle numberOfLines={2}>{title}</MessageTitle>
        <MessageDescription>{description}</MessageDescription>
      </Content>
    </Container>
  );
};

export { Modal };
