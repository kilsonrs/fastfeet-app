import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  width: 100%;
  height: 184px;
  background-color: #4c33cc;
  justify-content: flex-end;
  z-index: 1;
`;
export const ProfileContent = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 76px;
  position: absolute;
  top: 0;
`;
export const ProfileText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #d5ccff;
  margin-left: 24px;
`;
export const LogoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: { top: 20, bottom: 20, left: 50, right: 50 },
})`
  flex-direction: row;
  justify-content: center;
  margin-right: 24px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  position: absolute;
  bottom: 60px;
`;
export const HeaderTitle = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 32px;
  color: #fff;
  margin-right: 24px;
`;
export const PlaceContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const PlaceText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #d5ccff;
  margin-left: 8px;
`;

export const SearchContent = styled(Animated.View)`
  margin-top: -28px;
  z-index: 1;
`;
