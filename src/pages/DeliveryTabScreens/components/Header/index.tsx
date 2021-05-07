import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../../../hooks/auth';

import {
  Container,
  ProfileContent,
  ProfileText,
  PlaceContent,
  HeaderContent,
  Title,
  PlaceText,
  Logout,
} from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <ProfileContent>
        <ProfileText>{`Bem vindo, \n${user.name}`}</ProfileText>
        <Logout onPress={() => signOut()}>
          <Icon name="logout" size={24} color="#ffc042" />
        </Logout>
      </ProfileContent>
      <HeaderContent>
        <Title>Entregas</Title>
        <PlaceContent>
          <Icon name="place" size={24} color="#ffc042" />
          <PlaceText>São Paulo</PlaceText>
        </PlaceContent>
      </HeaderContent>
    </Container>
  );
};

export { Header };
