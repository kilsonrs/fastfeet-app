import React from 'react';
import { useRoute } from '@react-navigation/native';
import { RecipientCard } from '../components/RecipientCard';
import { StatusCard } from '../components/StatusCard';
import { Button } from '../../../components/Button';

import { Container } from './styles';
import { IDelivery } from '../../../dtos/IDelivery';

interface DeliveryParams {
  delivery: IDelivery;
  fromPage: string;
}

const Details: React.FC = () => {
  const route = useRoute();
  const { delivery, fromPage } = route.params as DeliveryParams;
  return (
    <Container>
      <RecipientCard recipient={delivery.recipient} />
      <StatusCard delivery={delivery} />
      {fromPage === 'Pending' && (
        <Button
          title={
            delivery.status === 'pendente'
              ? 'Retirar pacote'
              : 'Confirmar entrega'
          }
        />
      )}
    </Container>
  );
};

export { Details };
