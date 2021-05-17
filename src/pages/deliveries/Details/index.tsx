import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { RecipientCard } from '../../../components/RecipientCard';
import { StatusCard } from '../../../components/StatusCard';
import { Button } from '../../../components/Button';

import { Container } from './styles';
import { IDelivery } from '../../../dtos/IDelivery';
import api from '../../../services/api';

interface DeliveryParams {
  delivery: IDelivery;
  fromPage: string;
}

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { delivery, fromPage } = route.params as DeliveryParams;
  const { status, recipient } = delivery;
  const buttonTitle =
    status === 'pendente' ? 'Retirar pacote' : 'Confirmar entrega';

  const navigationParams = {
    type: 'success',
    title: 'Pacote retirado.',
    description: 'Só falta entregar :)',
    nextPage: fromPage,
  };

  const pickDelivery = useCallback(async () => {
    try {
      await api.patch(`/deliveries/${delivery.id}`, {
        startDate: new Date(),
      });
    } catch {
      Alert.alert('Houve um erro ao retirar a encomenda');
    }
  }, [delivery.id]);

  const finalizeDelivery = useCallback(async () => {
    try {
      await api.patch(`/deliveries/${delivery.id}`, {
        endDate: new Date(),
      });
    } catch {
      Alert.alert('Houve um erro ao confirmar a entrega da encomenda');
    }
  }, [delivery.id]);

  const handleButtonPress = useCallback(async () => {
    if (status === 'pendente') {
      await pickDelivery();
      navigation.navigate('Modal', navigationParams);
    }
    if (status === 'retirada') {
      await finalizeDelivery();

      navigation.navigate('Finalize');
    }
  }, [navigation, navigationParams, status, pickDelivery, finalizeDelivery]);

  const shoudShowButton = useMemo(() => {
    return fromPage === 'Pending' && status !== 'cancelada';
  }, [fromPage, status]);

  return (
    <Container>
      <RecipientCard recipient={recipient} />
      <StatusCard delivery={delivery} />
      {shoudShowButton && (
        <Button onPress={handleButtonPress} title={buttonTitle} />
      )}
    </Container>
  );
};

export { Details };
