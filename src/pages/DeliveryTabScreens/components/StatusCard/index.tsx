import React from 'react';
import { IDelivery } from '../../../../dtos/IDelivery';
import { capitelizeWord } from '../../../../utils/capitelizeWord';

import {
  Container,
  DataContent,
  DataIcon,
  DataText,
  InfoContainer,
  InfoContent,
  InfoTitle,
  InfoStatus,
} from './styles';

interface IDeliveryStatus {
  delivery: IDelivery;
}

const StatusCard: React.FC<IDeliveryStatus> = ({ delivery }) => {
  const { created_at, start_date, end_date, status } = delivery;
  const capitalizedStatus = capitelizeWord(status);

  return (
    <Container>
      <DataContent>
        <DataIcon name="info" size={24} color="#FFC042" />
        <DataText>Situação</DataText>
      </DataContent>
      <InfoContainer>
        <InfoContent>
          <InfoTitle>STATUS</InfoTitle>
          <InfoStatus>{capitalizedStatus}</InfoStatus>
          <InfoTitle>DATA DE RETIRADA</InfoTitle>
          <InfoStatus>{start_date || '--/--/----'}</InfoStatus>
        </InfoContent>
        <InfoContent>
          <InfoTitle>POSTADO EM</InfoTitle>
          <InfoStatus>{created_at}</InfoStatus>
          <InfoTitle>DATA DE ENTREGA</InfoTitle>
          <InfoStatus>{end_date || '--/--/----'}</InfoStatus>
        </InfoContent>
      </InfoContainer>
    </Container>
  );
};

export { StatusCard };
