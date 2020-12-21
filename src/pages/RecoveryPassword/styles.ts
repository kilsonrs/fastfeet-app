import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: #4c33cc;
  padding: 0 32px;
`;

export const FFLogo = styled.Image`
  margin-top: 87px;
`;

export const FFBackground = styled.Image`
  position: absolute;
  top: -6px;
`;

export const RecoveryContent = styled.View``;

export const RecoveryMessageHighlighted = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
  color: #ffc042;
`;

export const RecoveryMessage = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
  color: #fff;
  margin-top: -8px;
`;

export const SecutiryMessage = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 16px;
  margin-top: 24px;
  color: #d4ccff;
`;

export const AddressContent = styled.View``;

export const AddressTitle = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 10px;
  margin-bottom: 8px;
  color: #d4ccff;
`;

export const AddressMessage = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 16px;
  color: #d4ccff;
`;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0;
  margin-bottom: 32px;
`;

export const GoBackButtonText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 16px;
  color: #d4ccff;
`;
