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

const Completed: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    completedDeliveries,
    filterByCompletedDeliveryNeighborhood,
  } = useDelivery();

  const handlePackageDetail = useCallback(
    delivery => {
      navigate('Details', { delivery, fromPage: 'Completed' });
    },
    [navigate],
  );

  const deliveriesFormatted: IDeliveryFormatted[] = useMemo(() => {
    return completedDeliveries.map(delivery => ({
      ...delivery,
      created_at_formatted: parseDate(delivery.created_at),
      start_date_formatted: delivery.start_date
        ? parseDate(delivery.start_date)
        : '',
      end_date_formatted: delivery.end_date ? parseDate(delivery.end_date) : '',
    }));
  }, [completedDeliveries]);

  const handleSearchNeighborhood = useCallback(
    (neighborhood: string | null) => {
      filterByCompletedDeliveryNeighborhood(neighborhood);
    },
    [filterByCompletedDeliveryNeighborhood],
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

export { Completed };
