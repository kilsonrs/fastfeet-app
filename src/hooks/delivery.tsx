import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';
import { IDelivery } from '../dtos/IDelivery';
import api from '../services/api';

interface DeliveryContext {
  deliveries: IDelivery[];
}

interface DeliveryContextData {
  pendingDeliveries: IDelivery[];
  completedDeliveries: IDelivery[];
  filterByPendingDeliveryNeighborhood: (neighborhood: string | null) => void;
  filterByCompletedDeliveryNeighborhood: (neighborhood: string | null) => void;
  pickDelivery: (deliveryId: string) => Promise<void>;
  finalizeDelivery: (deliveryId: string) => Promise<void>;
}

const DeliveryContext = createContext({} as DeliveryContextData);

function useDelivery(): DeliveryContextData {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within an DeliveryProvider');
  }
  return context;
}

const DeliveryProvider: React.FC = ({ children }) => {
  const [completedDeliveries, setCompletedDeliveries] = useState<IDelivery[]>(
    [],
  );
  const [pendingDeliveries, setPendingDeliveries] = useState<IDelivery[]>([]);

  const [
    neighborhoodPendingDeliveryFilter,
    setNeighborhoodPendingDeliveryFilter,
  ] = useState<string | null>(null);
  const [
    neighborhoodCompletedDeliveryFilter,
    setNeighborhoodCompletedDeliveryFilter,
  ] = useState<string | null>(null);
  const pickDelivery = useCallback(
    async (deliveryId: string) => {
      try {
        const start_date = new Date();
        await api.patch(`/deliveries/${deliveryId}`, {
          start_date,
        });
        setPendingDeliveries(
          pendingDeliveries.map(delivery =>
            delivery.id === deliveryId
              ? { ...delivery, start_date, status: 'retirada' }
              : delivery,
          ),
        );
      } catch {
        Alert.alert('Houve um erro ao retirar a encomenda');
      }
    },
    [pendingDeliveries],
  );

  const finalizeDelivery = useCallback(
    async deliveryId => {
      try {
        const end_date = new Date();
        await api.patch(`/deliveries/${deliveryId}`, {
          end_date,
        });

        const completedDelivery = pendingDeliveries.find(
          delivery => delivery.id === deliveryId,
        );

        Object.assign(completedDelivery, {
          end_date,
          status: 'entregue',
        });

        setPendingDeliveries(
          pendingDeliveries.filter(delivery => delivery.id !== deliveryId),
        );

        setCompletedDeliveries([...completedDeliveries, completedDelivery]);
      } catch {
        Alert.alert('Houve um erro ao confirmar a entrega da encomenda');
      }
    },
    [pendingDeliveries, completedDeliveries],
  );

  const filterByPendingDeliveryNeighborhood = useCallback(
    (neighborhood: string | null) => {
      setNeighborhoodPendingDeliveryFilter(neighborhood);
    },
    [],
  );

  const filterByCompletedDeliveryNeighborhood = useCallback(
    (neighborhood: string | null) => {
      setNeighborhoodCompletedDeliveryFilter(neighborhood);
    },
    [],
  );

  useEffect(() => {
    async function loadPendingDeliveries() {
      const response = await api.get('/deliverers/id/deliveries', {
        params: {
          neighborhood: neighborhoodPendingDeliveryFilter,
        },
      });
      setPendingDeliveries(response.data);
    }
    async function loadCompletedDeliveries() {
      const response = await api.get('/deliverers/id/deliveries', {
        params: {
          neighborhood: neighborhoodCompletedDeliveryFilter,
          completed: true,
        },
      });
      setCompletedDeliveries(response.data);
    }

    loadPendingDeliveries();
    loadCompletedDeliveries();
  }, [neighborhoodCompletedDeliveryFilter, neighborhoodPendingDeliveryFilter]);

  return (
    <DeliveryContext.Provider
      value={{
        pendingDeliveries,
        completedDeliveries,
        filterByPendingDeliveryNeighborhood,
        filterByCompletedDeliveryNeighborhood,
        pickDelivery,
        finalizeDelivery,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

export { DeliveryProvider, useDelivery };
