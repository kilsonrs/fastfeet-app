import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import api from '../../../services/api';

import { Header } from '../../../components/Header';

import { DeliveryCard } from '../../../components/DeliveryCard';
import { TotalListItems } from '../../../components/TotalListItems';

import { IDelivery } from '../../../dtos/IDelivery';

import { parseDate } from '../../../utils/parseDate';

import { Container, Content } from './styles';

const Pending: React.FC = () => {
  const { navigate } = useNavigation();

  const [deliveries, setDeliveries] = useState<IDelivery[]>([]);
  const [neighborhoodFilter, setNeighborhoodFilter] = useState<string | null>(
    null,
  );

  const handlePackageDetail = useCallback(
    delivery => {
      navigate('Details', { delivery, fromPage: 'Pending' });
    },
    [navigate],
  );

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliverers/id/deliveries', {
        params: {
          neighborhood: neighborhoodFilter,
        },
      });
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [neighborhoodFilter]);

  const deliveriesFormatted: IDelivery[] = useMemo(() => {
    return deliveries.map(delivery => ({
      ...delivery,
      created_at: parseDate(delivery.created_at),
      start_date: delivery.start_date ? parseDate(delivery.start_date) : '',
      end_date: delivery.end_date ? parseDate(delivery.end_date) : '',
    }));
  }, [deliveries]);

  const handleSearchNeighborhood = useCallback(
    (neighborhood: string | null) => {
      setNeighborhoodFilter(neighborhood);
    },
    [],
  );

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerAnimationStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 72],
        [184, 112],
        Extrapolate.CLAMP,
      ),
    };
  });

  const profileAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [20, 60], [1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <Container>
      <Header
        headerStyle={headerAnimationStyle}
        profileStyle={profileAnimationStyle}
        handleSearchNeighborhood={handleSearchNeighborhood}
      />
      <Content>
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={{ zIndex: 0 }}
          contentContainerStyle={{
            paddingTop: 212,
          }}
        >
          <TotalListItems count={deliveriesFormatted.length} />
          {deliveriesFormatted.map(delivery => (
            <DeliveryCard
              key={delivery.id}
              delivery={delivery}
              onPress={() => handlePackageDetail(delivery)}
            />
          ))}
        </Animated.ScrollView>
      </Content>
    </Container>
  );
};

export { Pending };
