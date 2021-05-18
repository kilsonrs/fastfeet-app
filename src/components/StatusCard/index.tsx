import React from 'react';
import { capitelizeWord } from '../../utils/capitelizeWord';

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
  status: 'pendente' | 'retirada' | 'cancelada' | 'entregue';
  created_at_formatted: string;
  start_date_formatted: string;
  end_date_formatted: string;
}

interface IStatus {
  delivery: IDeliveryStatus;
}

const StatusCard: React.FC<IStatus> = ({ delivery }) => {
  const {
    created_at_formatted,
    start_date_formatted,
    end_date_formatted,
    status,
  } = delivery;
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
          <InfoStatus>{start_date_formatted || '--/--/----'}</InfoStatus>
        </InfoContent>
        <InfoContent>
          <InfoTitle>POSTADO EM</InfoTitle>
          <InfoStatus>{created_at_formatted}</InfoStatus>
          <InfoTitle>DATA DE ENTREGA</InfoTitle>
          <InfoStatus>{end_date_formatted || '--/--/----'}</InfoStatus>
        </InfoContent>
      </InfoContainer>
    </Container>
  );
};

export { StatusCard };
