import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';
import Card from '../../../components/Card';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

import { Container, DeliveryList, Content } from './styles';

export interface Delivery {
  id: string;
  recipient: string;
}

const Pending: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const { navigate } = useNavigation();

  const handlePackageDetail = useCallback(
    id => {
      navigate('Details', { id });
    },
    [navigate],
  );
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveryman/deliveries');
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  return (
    <Container>
      <Header />
      <SearchInput />
      <Content>
        <DeliveryList
          data={deliveries}
          keyExtractor={delivery => delivery.id}
          renderItem={({ item: delivery }) => (
            <Card
              title={delivery.recipient}
              onPress={() => handlePackageDetail(delivery.id)}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export default Pending;
