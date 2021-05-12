/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
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
  FFBackground,
} from './styles';

import backgroungLogoImg from '../../../assets/FF.png';

import arrowLeft from '../../../assets/ArrowLeft.png';
import { Logo } from '../../../components/Logo';

const Forgot: React.FC = () => {
  const navigation = useNavigation();

  const logoOpacity = useSharedValue(0);
  const messageOpacity = useSharedValue(0);
  const addressOpacity = useSharedValue(0);
  const backgroundOpacity = useSharedValue(0);

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    marginBottom: 40,
  }));

  const messageStyle = useAnimatedStyle(() => ({
    opacity: messageOpacity.value,
  }));

  const addressStyle = useAnimatedStyle(() => ({
    opacity: addressOpacity.value,
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  const startAnimations = useCallback(() => {
    logoOpacity.value = withTiming(1, { duration: 400 });
    messageOpacity.value = withTiming(1, { duration: 800 });
    addressOpacity.value = withTiming(1, { duration: 1200 });
    backgroundOpacity.value = withTiming(1, { duration: 3200 });
  }, [
    logoOpacity.value,
    messageOpacity.value,
    backgroundOpacity.value,
    addressOpacity.value,
  ]);

  useEffect(() => {
    startAnimations();
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <FFBackground style={backgroundStyle} source={backgroungLogoImg} />
      <Logo style={logoStyle} />
      <RecoveryContent style={messageStyle}>
        <RecoveryMessageHighlighted>Esqueceu</RecoveryMessageHighlighted>
        <RecoveryMessage>sua senha?</RecoveryMessage>
        <SecutiryMessage>
          {
            'Por motivos de segurança,\npara recuperá-la, vá até a \ncentral da Fastfeet..'
          }
        </SecutiryMessage>
      </RecoveryContent>
      <AddressContent style={addressStyle}>
        <AddressTitle>ENDEREÇO</AddressTitle>
        <AddressMessage>
          {'Rua Guilherme Gemballa, 260 \nJardim América, SP \n15 910-000'}
        </AddressMessage>
      </AddressContent>
      <GoBackButton onPress={handleGoBack}>
        <Image source={arrowLeft} />
        <GoBackButtonText>Voltar para o login</GoBackButtonText>
      </GoBackButton>
    </Container>
  );
};
export { Forgot };
