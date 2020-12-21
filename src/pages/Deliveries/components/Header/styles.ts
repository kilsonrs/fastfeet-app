import styled from 'styled-components/native';

export const Container = styled.View`
  height: 175px;
  background: #4c33cc;
`;

export const ProfileContent = styled.View`
  flex-direction: row;
  align-items: center;
  height: 76px;
`;

export const ProfileText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #d5ccff;
  margin-left: 24px;
`;

export const Logout = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-right: 24px;
  margin-left: auto;
`;

export const Title = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 32px;
  color: #fff;
  margin-left: 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlaceContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 24px 0 auto;
`;

export const PlaceText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #d5ccff;
  margin-left: 8px;
`;
