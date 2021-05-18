/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { TakePictureOptions } from 'react-native-camera';
import { Button } from '../../../components/Button';

import {
  Container,
  Content,
  PhotoPreview,
  Camera,
  Pending,
  PendingButton,
  PendingButtonText,
  TakePhotoButton,
  Instructions,
  TakePhotoButtonIcon,
  PendingText,
} from './styles';

const Finalize: React.FC = () => {
  const navigation = useNavigation();

  const [photoUri, setPhotoUri] = useState({});
  const [takedPhoto, setTakedPhoto] = useState(false);
  const cameraRef = useRef(null);

  const handleTakePhoto = useCallback(async camera => {
    if (cameraRef) {
      const options: TakePictureOptions = {
        quality: 0.5,
        base64: true,
      };
      const data = await camera.takePictureAsync(options);
      const uri = { uri: `data:image/jpg;base64,${data.base64}` };
      setPhotoUri(uri);
      setTakedPhoto(true);
    }
  }, []);

  const handleRetry = useCallback(() => {
    setTakedPhoto(false);
    setPhotoUri(null);
  }, []);

  const handleFinalizeDelivery = useCallback(() => {
    const finalizeMessage = {
      type: 'success',
      title: 'Foto enviada!',
      description: 'Pacote entregue.',
      nextPage: 'Completed',
    };
    navigation.navigate('Modal', finalizeMessage);
  }, [navigation]);

  const PendingView = useCallback(
    () => (
      <Pending>
        <PendingText>{`Você precisa autorizar\n que usemos sua câmera.`}</PendingText>
        <PendingButton
          onPress={() => cameraRef.current.refreshAuthorizationStatus()}
        >
          <PendingButtonText>Autorizar</PendingButtonText>
        </PendingButton>
      </Pending>
    ),
    [],
  );

  return (
    <Container>
      <Content>
        {takedPhoto ? (
          <PhotoPreview source={photoUri}>
            <TakePhotoButton onPress={handleRetry}>
              <TakePhotoButtonIcon name="autorenew" size={32} />
            </TakePhotoButton>
          </PhotoPreview>
        ) : (
          <Camera
            ref={cameraRef}
            captureAudio={false}
            type="back"
            androidCameraPermissionOptions={{
              title: 'Permissão para usar sua câmera',
              message: 'Precisamos de permissão para usar sua câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status }) => {
              if (status === 'NOT_AUTHORIZED') {
                return <PendingView />;
              }
              if (status === 'PENDING_AUTHORIZATION') {
                return <ActivityIndicator size="large" color="#999" />;
              }
              return (
                <TakePhotoButton onPress={() => handleTakePhoto(camera)}>
                  <TakePhotoButtonIcon name="camera-alt" size={32} />
                </TakePhotoButton>
              );
            }}
          </Camera>
        )}
      </Content>
      <Instructions numberOfLines={2}>
        {`Tire uma foto do pacote\n com a assinatura do destinatário.`}
      </Instructions>

      <Button
        title="Enviar foto"
        disabled={!takedPhoto}
        onPress={handleFinalizeDelivery}
      />
    </Container>
  );
};

export default Finalize;
