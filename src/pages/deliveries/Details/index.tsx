import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RecipientCard } from '../../../components/RecipientCard';
import { StatusCard } from '../../../components/StatusCard';
import { Button } from '../../../components/Button';

import { Container } from './styles';
import { useDelivery } from '../../../hooks/delivery';
import { IDelivery } from '../../../dtos/IDelivery';

interface DeliveryDetails extends IDelivery {
  created_at_formatted: string;
  start_date_formatted: string;
  end_date_formatted: string;
}

interface DeliveryParams {
  delivery: Omit<DeliveryDetails, 'start_date' | 'end_date' | 'created_at'>;
  fromPage: string;
}

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { pickDelivery, finalizeDelivery } = useDelivery();
  const { delivery, fromPage } = route.params as DeliveryParams;
  const {
    status,
    recipient,
    created_at_formatted,
    start_date_formatted,
    end_date_formatted,
  } = delivery;

  const buttonTitle =
    status === 'pendente' ? 'Retirar pacote' : 'Confirmar entrega';

  const deliveryStatus = {
    status,
    created_at_formatted,
    start_date_formatted,
    end_date_formatted,
  };

  const navigationParams = {
    type: 'success',
    title: 'Pacote retirado.',
    description: 'Só falta entregar :)',
    nextPage: fromPage,
  };

  const handleButtonPress = useCallback(async () => {
    if (status === 'pendente') {
      await pickDelivery(delivery.id);
      navigation.navigate('Modal', navigationParams);
    }
    if (status === 'retirada') {
      await finalizeDelivery(delivery.id);

      navigation.navigate('Finalize');
    }
  }, [
    navigation,
    navigationParams,
    status,
    pickDelivery,
    finalizeDelivery,
    delivery.id,
  ]);

  const shoudShowButton = useMemo(() => {
    return fromPage === 'Pending' && status !== 'cancelada';
  }, [fromPage, status]);

  return (
    <Container>
      <RecipientCard recipient={recipient} />
      <StatusCard delivery={deliveryStatus} />
      {shoudShowButton && (
        <Button onPress={handleButtonPress} title={buttonTitle} />
      )}
    </Container>
  );
};

export { Details };
