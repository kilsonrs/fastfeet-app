import React from 'react';
import RecipientCard from '../components/RecipientCard';
import StatusCard from '../components/StatusCard';
import Button from '../../../components/Button';

import { Container } from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <RecipientCard />
      <StatusCard />
      <Button>Retirar pacote</Button>
    </Container>
  );
};

export default Details;
