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
  const { signOut } = useAuth();
  return (
    <Container>
      <ProfileContent>
        <ProfileText>{`Bem vindo, \nTiago Luchtenberg`}</ProfileText>
        <Logout onPress={() => signOut()}>
          <Icon name="logout" size={24} color="#ffc042" />
        </Logout>
      </ProfileContent>
      <HeaderContent>
        <Title>Entregas</Title>
        <PlaceContent>
          <Icon name="place" size={24} color="#ffc042" />
          <PlaceText>Rio do Sul</PlaceText>
        </PlaceContent>
      </HeaderContent>
    </Container>
  );
};

export default Header;
