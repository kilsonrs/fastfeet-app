/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import CheckBox from '@react-native-community/checkbox';
import { useAuth } from '../../../hooks/auth';

import Input from '../../../components/Input';
import { Button } from '../../../components/Button';

import backgroundLogoImg from '../../../assets/FF.png';

import {
  Container,
  ActionMessage,
  FormOptionsContent,
  RememberMeText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  WelcomeMessageHighlighted,
  WelcomeMessage,
  FFBackground,
} from './styles';
import { Logo } from '../../../components/Logo';

interface SignInFormData {
  cpf: string;
  password: string;
}

const SignIn: React.FC = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);
  const { signIn } = useAuth();

  const backgroundOpacity = useSharedValue(0);
  const backgroundPosition = useSharedValue(-40);

  const messageOpacity = useSharedValue(0);
  const logoOpacity = useSharedValue(0);

  const messageStyle = useAnimatedStyle(() => ({
    opacity: messageOpacity.value,
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    marginBottom: 40,
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
    left: backgroundPosition.value,
  }));

  useEffect(() => {
    logoOpacity.value = withTiming(1, { duration: 500 });
    messageOpacity.value = withTiming(1, { duration: 1200 });
    backgroundOpacity.value = withTiming(1, { duration: 3000 });
    backgroundPosition.value = withTiming(0, { duration: 3200 });
  }, [
    logoOpacity.value,
    messageOpacity.value,
    backgroundOpacity.value,
    backgroundPosition.value,
  ]);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({ cpf: data.cpf, password: data.password });
        // throw new Error();
      } catch {
        navigation.navigate('Modal', {
          type: 'error',
          title: 'Senha ou CPF incorretos.',
          nextPage: 'SignIn',
        });
      }
    },
    [signIn, navigation],
  );

  const handleForgot = useCallback(() => {
    navigation.navigate('Forgot');
  }, [navigation]);

  const handleSubmit = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ height: 950 }}
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
    >
      <Container>
        <FFBackground style={backgroundStyle} source={backgroundLogoImg} />
        <Logo style={logoStyle} />
        <Animated.View style={messageStyle}>
          <WelcomeMessageHighlighted>Entregador,</WelcomeMessageHighlighted>
          <WelcomeMessage>{'você é nosso \nmaior valor'}</WelcomeMessage>
          <ActionMessage>
            {'Faça seu login para \ncomeçar suas entregas.'}
          </ActionMessage>
        </Animated.View>
        <View>
          <Form
            ref={formRef}
            onSubmit={handleSignIn}
            style={{
              justifyContent: 'flex-start',
            }}
          >
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholder="CPF"
              returnKeyType="next"
              name="cpf"
              icon="person"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />

            <FormOptionsContent>
              <CheckBox
                style={{ marginLeft: -6 }}
                value={remember}
                onChange={() => setRemember(!remember)}
                tintColors={{
                  true: '#FFF',
                  false: '#fff',
                }}
              />
              <RememberMeText>Lembrar-me</RememberMeText>

              <ForgotPasswordButton
                hitSlop={{ top: 26, bottom: 26 }}
                onPress={handleForgot}
              >
                <ForgotPasswordButtonText>
                  Esqueci minha senha
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>
            </FormOptionsContent>
          </Form>
        </View>
        <Button title="Entrar" onPress={handleSubmit}>
          Entrar
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
};

export { SignIn };
