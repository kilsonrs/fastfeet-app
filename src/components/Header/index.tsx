import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { SearchInput } from '../SearchInput';

import {
  Container,
  ProfileContent,
  ProfileText,
  LogoutButton,
  HeaderContent,
  HeaderTitle,
  PlaceContent,
  PlaceText,
} from './styles';

interface HeaderProps {
  headerStyle: {
    height: number;
  };
  profileStyle: {
    opacity: number;
  };
  handleSearchNeighborhood: (neighborhood: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({
  headerStyle,
  profileStyle,
  handleSearchNeighborhood,
}) => {
  const { signOut, user } = useAuth();
  return (
    <>
      <Container style={headerStyle}>
        <ProfileContent style={profileStyle}>
          <ProfileText>{`Bem vindo, \n${user.name}`}</ProfileText>
          <LogoutButton onPress={() => signOut()}>
            <Icon name="logout" size={24} color="#ffc042" />
          </LogoutButton>
        </ProfileContent>

        <HeaderContent>
          <HeaderTitle>Entregas</HeaderTitle>

          <PlaceContent>
            <Icon name="place" size={24} color="#ffc042" />
            <PlaceText>São Paulo</PlaceText>
          </PlaceContent>
        </HeaderContent>
      </Container>
      <View style={{ marginTop: -28 }}>
        <SearchInput handleSearchNeighborhood={handleSearchNeighborhood} />
      </View>
    </>
  );
};

export { Header };
