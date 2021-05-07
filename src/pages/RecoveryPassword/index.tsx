import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  Container,
  SecutiryMessage,
  AddressContent,
  AddressTitle,
  AddressMessage,
  GoBackButton,
  GoBackButtonText,
  RecoveryContent,
  RecoveryMessageHighlighted,
  RecoveryMessage,
  FFLogo,
  FFBackground,
} from './styles';
import logoImg from '../../assets/Logo.png';
import ffLogoImg from '../../assets/FF.png';
import arrowLeft from '../../assets/ArrowLeft.png';

const RecoveryPassword: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <FFLogo source={logoImg} />
      <FFBackground source={ffLogoImg} />
      <RecoveryContent>
        <RecoveryMessageHighlighted>Esqueceu</RecoveryMessageHighlighted>
        <RecoveryMessage>sua senha?</RecoveryMessage>
        <SecutiryMessage>
          {
            'Por motivos de segurança,\npara recuperá-la, vá até a \ncentral da Fastfeet..'
          }
        </SecutiryMessage>
      </RecoveryContent>
      <AddressContent>
        <AddressTitle>ENDEREÇO</AddressTitle>
        <AddressMessage>
          {'Rua Guilherme Gemballa, 260 \nJardim América, SC \n89 168-000'}
        </AddressMessage>
      </AddressContent>
      <GoBackButton onPress={handleGoBack}>
        <Image source={arrowLeft} />
        <GoBackButtonText>Voltar para o login</GoBackButtonText>
      </GoBackButton>
    </Container>
  );
};
export { RecoveryPassword };
