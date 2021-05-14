import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RecipientCard } from '../../../components/RecipientCard';
import { StatusCard } from '../../../components/StatusCard';
import { Button } from '../../../components/Button';

import { Container } from './styles';
import { IDelivery } from '../../../dtos/IDelivery';

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

  const handleButtonPress = useCallback(() => {
    if (status === 'pendente') {
      navigation.navigate('Modal', navigationParams);
    }
    if (status === 'retirada') {
      navigation.navigate('Finalize');
    }
  }, [navigation, navigationParams, status]);

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
