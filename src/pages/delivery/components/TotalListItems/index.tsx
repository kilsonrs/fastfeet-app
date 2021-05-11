import React from 'react';

import { Container, Line, Title } from './styles';

interface TotalListItemsProps {
  count: number;
}

const TotalListItems: React.FC<TotalListItemsProps> = ({ count }) => {
  const deliveriesCountNumber = count === 0 ? 'Nehuma' : count;
  const deliveriesCountTitle = count > 1 ? 'entregas' : 'entrega';

  return (
    <Container>
      <Line />
      <Title>{`${deliveriesCountNumber} ${deliveriesCountTitle}`}</Title>
      <Line />
    </Container>
  );
};

export { TotalListItems };
