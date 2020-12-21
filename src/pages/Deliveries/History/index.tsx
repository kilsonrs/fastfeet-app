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

const History: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const navigation = useNavigation();

  const handlePackageDetail = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveryman/deliveries/history');
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
            <Card title={delivery.recipient} onPress={handlePackageDetail} />
          )}
        />
      </Content>
    </Container>
  );
};

export default History;
