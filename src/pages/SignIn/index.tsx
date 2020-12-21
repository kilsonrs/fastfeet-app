import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/Logo.png';
import ffLogoImg from '../../assets/FF.png';

import {
  Container,
  ActionMessage,
  RememberContent,
  RememberMeText,
  RememberPasswordButton,
  RememberPasswordButtonText,
  WelcomeContent,
  WelcomeMessageHighlighted,
  WelcomeMessage,
  FFLogo,
  FFBackground,
} from './styles';

interface SignInFormData {
  cpf: string;
  password: string;
}

const SignIn: React.FC = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({ cpf: data.cpf, password: data.password });
      } catch {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login. Cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  const handleForgot = useCallback(() => {
    navigation.navigate('RecoveryPassword');
  }, [navigation]);

  return (
    <Container>
      <FFLogo source={logoImg} />
      <FFBackground source={ffLogoImg} />
      <WelcomeContent>
        <WelcomeMessageHighlighted>Entregador,</WelcomeMessageHighlighted>
        <WelcomeMessage>{'você é nosso \nmaior valor'}</WelcomeMessage>
        <ActionMessage>
          {'Faça seu login para \ncomeçar suas entregas.'}
        </ActionMessage>
      </WelcomeContent>

      <Form ref={formRef} onSubmit={handleSignIn}>
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
          onSubmitEditing={() => formRef.current?.submitForm()}
        />
        <RememberContent>
          <RememberMeText>Lembrar-me</RememberMeText>
          <RememberPasswordButton
            hitSlop={{ top: 26, bottom: 26 }}
            onPress={handleForgot}
          >
            <RememberPasswordButtonText>
              Esqueci minha senha
            </RememberPasswordButtonText>
          </RememberPasswordButton>
        </RememberContent>
        <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
      </Form>
    </Container>
  );
};
export default SignIn;
