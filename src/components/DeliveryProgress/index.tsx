import React, { useEffect, useMemo, useState } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CheckPoint from '../CheckPoint';

import {
  Container,
  ProgressBar,
  Inactive,
  Active,
  Pending,
  Picked,
  Delivered,
  Canceled,
  Text,
  Status,
} from './styles';

interface DeliveryProgressProps {
  status: 'pendente' | 'retirada' | 'cancelada' | 'entregue';
}

const DeliveryProgress: React.FC<DeliveryProgressProps> = ({ status }) => {
  const [isPending, setIsPending] = useState(false);
  const [isPicked, setIsPicked] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const progressWidth = useSharedValue(0);

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progressWidth.value}%`,
  }));

  const progressToValue = useMemo(() => {
    if (status === 'retirada') {
      return 50;
    }
    if (status === 'entregue') {
      return 100;
    }
    if (status === 'cancelada') {
      return 100;
    }
    return 0;
  }, [status]);

  useEffect(() => {
    setIsPending(status !== 'cancelada');
    const progressTimer = setTimeout(() => {
      return (progressWidth.value = withTiming(progressToValue, {
        duration: 2000,
        easing: Easing.linear,
      }));
    }, 500);

    return () => {
      clearTimeout(progressTimer);
    };
  }, [progressWidth.value, progressToValue, status]);

  useEffect(() => {
    const pickedCheckTimer = setTimeout(
      () => {
        return setIsPicked(status === 'retirada' || status === 'entregue');
      },
      status === 'entregue' ? 1500 : 2500,
    );
    return () => {
      clearTimeout(pickedCheckTimer);
    };
  }, [status]);

  useEffect(() => {
    const deliveredCheckTimer = setTimeout(() => {
      return setIsDelivered(status === 'entregue');
    }, 2500);
    return () => {
      clearTimeout(deliveredCheckTimer);
    };
  }, [status]);

  return (
    <Container>
      <ProgressBar>
        <Inactive />
        <Active style={progressStyle} status={status} />
      </ProgressBar>
      {status !== 'cancelada' ? (
        <Status>
          <Pending>
            <CheckPoint completed={isPending} />
            <Text completed={isPending}>Aguardando</Text>
          </Pending>

          <Picked>
            <CheckPoint completed={isPicked} />
            <Text completed={isPicked}>Retirado</Text>
          </Picked>

          <Delivered>
            <CheckPoint completed={isDelivered} />
            <Text completed={isDelivered}>Entregue</Text>
          </Delivered>
        </Status>
      ) : (
        <Canceled>
          <Text canceled>Encomenda cancelada</Text>
        </Canceled>
      )}
    </Container>
  );
};

export default DeliveryProgress;
