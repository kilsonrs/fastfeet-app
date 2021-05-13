import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: #f7f5fa;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-height: 546px;
  background: #000;
  elevation: 10;
`;

export const PhotoPreview = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Pending = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #eee;
`;

export const PendingText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #6f6c80;
`;

export const PendingButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 32px;
  margin-top: 32px;
  background: #ffc042;
  border-radius: 4px;
`;

export const PendingButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #4c4766;
`;

export const TakePhotoButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #000000;
  opacity: 0.4;
  height: 64px;
  width: 64px;
  border-radius: 32px;
  position: absolute;
  bottom: 24px;
`;

export const TakePhotoButtonIcon = styled(MaterialIcon).attrs({
  color: '#fff',
})``;

export const Instructions = styled.Text`
  text-align: center;
  color: #6f6c80;
  margin-top: 24px;
  margin-bottom: 16px;
`;
