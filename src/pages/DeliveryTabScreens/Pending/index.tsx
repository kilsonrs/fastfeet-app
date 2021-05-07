import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

import { Header } from '../components/Header';
import { SearchInput } from '../components/SearchInput';
import { DeliveryCard } from '../../../components/DeliveryCard';

import { IDelivery } from '../../../dtos/IDelivery';

import { parseDate } from '../../../utils/parseDate';

import { Container, DeliveryList, Content } from './styles';
import { TotalListItems } from '../../../components/TotalListItems';

const Pending: React.FC = () => {
  const [deliveries, setDeliveries] = useState<IDelivery[]>([]);
  const { navigate } = useNavigation();

  const handlePackageDetail = useCallback(
    delivery => {
      navigate('Details', { delivery, fromPage: 'Pending' });
    },
    [navigate],
  );

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliverers/id/deliveries');
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  const deliveriesFormatted: IDelivery[] = useMemo(() => {
    return deliveries.map(delivery => ({
      ...delivery,
      created_at: parseDate(delivery.created_at),
      start_date: delivery.start_date ? parseDate(delivery.start_date) : '',
    }));
  }, [deliveries]);

  return (
    <Container>
      <Header />
      <SearchInput />
      <Content>
        <DeliveryList
          data={deliveriesFormatted}
          keyExtractor={delivery => delivery.id}
          ListHeaderComponent={
            <TotalListItems count={deliveriesFormatted.length} />
          }
          renderItem={({ item: delivery }) => (
            <DeliveryCard
              delivery={delivery}
              onPress={() => handlePackageDetail(delivery)}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export { Pending };
