import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Header } from '../../../components/Header';

import { DeliveryCard } from '../../../components/DeliveryCard';
import { TotalListItems } from '../../../components/TotalListItems';

import { IDelivery } from '../../../dtos/IDelivery';

import { parseDate } from '../../../utils/parseDate';

import { Container, Content } from './styles';
import { useDelivery } from '../../../hooks/delivery';

interface IDeliveryFormatted extends IDelivery {
  created_at_formatted: string;
}

const Pending: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    pendingDeliveries,
    filterByPendingDeliveryNeighborhood,
  } = useDelivery();

  const handlePackageDetail = useCallback(
    delivery => {
      const {
        id,
        status,
        recipient,
        created_at_formatted,
        start_date_formatted,
        end_date_formatted,
      } = delivery;

      const deliveryDetails = {
        id,
        status,
        recipient,
        created_at_formatted,
        start_date_formatted,
        end_date_formatted,
      };
      navigate('Details', { delivery: deliveryDetails, fromPage: 'Pending' });
    },
    [navigate],
  );

  const deliveriesFormatted: IDeliveryFormatted[] = useMemo(() => {
    return pendingDeliveries.map(delivery => ({
      ...delivery,
      created_at_formatted: parseDate(delivery.created_at),
      start_date_formatted: delivery.start_date
        ? parseDate(delivery.start_date)
        : '',
    }));
  }, [pendingDeliveries]);

  const handleSearchNeighborhood = useCallback(
    (neighborhood: string | null) => {
      filterByPendingDeliveryNeighborhood(neighborhood);
    },
    [filterByPendingDeliveryNeighborhood],
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
          contentContainerStyle={
            {
              // paddingTop: 212,
            }
          }
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
