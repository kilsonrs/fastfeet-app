import React from 'react';
import { AuthProvider } from './auth';
import { DeliveryProvider } from './delivery';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DeliveryProvider>{children}</DeliveryProvider>
  </AuthProvider>
);

export default AppProvider;
