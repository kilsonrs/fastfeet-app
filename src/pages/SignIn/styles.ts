import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: #4c33cc;
  padding: 0 32px;
`;

export const FFLogo = styled.Image`
  margin-top: 47px;
`;

export const FFBackground = styled.Image`
  position: absolute;
  top: -6px;
`;

export const WelcomeContent = styled.View``;

export const WelcomeMessageHighlighted = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
  color: #ffc042;
`;

export const WelcomeMessage = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
  color: #fff;
`;

export const ActionMessage = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  margin-top: 16px;
  color: #d4ccff;
`;

// export const Form = styled.View`
//   margin-bottom: 44px;
//   background-color: transparent;
// `;

export const RememberContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 18px 0 26px;
  background-color: transparent;
`;

export const RememberMeText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #d4ccff;
`;

export const RememberPasswordButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 18px 0 26px;
  background-color: transparent;
`;

export const RememberPasswordButtonText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #d4ccff;
`;
