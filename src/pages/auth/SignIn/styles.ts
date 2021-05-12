import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: #4c33cc;
  width: 100%;
  padding: 32px;
  elevation: 1;
`;

export const FFBackground = styled(Animated.Image)`
  position: absolute;
  top: 0;
`;

export const WelcomeMessageHighlighted = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
  color: #ffc042;
`;

export const WelcomeMessage = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
  color: #fff;
  margin-bottom: 16px;
`;

export const ActionMessage = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #d4ccff;
  margin-bottom: 64px;
`;

export const FormOptionsContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 26px 0;
`;

export const RememberMeText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #d4ccff;
  margin-left: 12px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  margin-left: auto;
`;

export const ForgotPasswordButtonText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #d4ccff;
`;
