import React, { createContext, useContext, useState } from 'react';
import { IDelivery } from '../dtos/IDelivery';

interface DeliveryContext {
  deliveries: IDelivery[];
}

const DeliveryContext = createContext({} as IDelivery[]);

function useDelivery(): IDelivery[] {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within an DeliveryProvider');
  }
  return context;
}

const DeliveryProvider: React.FC = ({ children }) => {
  const [delivery, setDelivery] = useState<IDelivery[]>([]);

  return (
    <DeliveryContext.Provider value={delivery}>
      {children}
    </DeliveryContext.Provider>
  );
};

export { DeliveryProvider, useDelivery };
