import React from 'react';

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

const StatusCard: React.FC = () => {
  return (
    <Container>
      <DataContent>
        <DataIcon name="info" size={24} color="#FFC042" />
        <DataText>Situação</DataText>
      </DataContent>
      <InfoContainer>
        <InfoContent>
          <InfoTitle>STATUS</InfoTitle>
          <InfoStatus>Aguardando</InfoStatus>
          <InfoTitle>DATA DE RETIRADA</InfoTitle>
          <InfoStatus>--/--/----</InfoStatus>
        </InfoContent>
        <InfoContent>
          <InfoTitle>POSTADO EM</InfoTitle>
          <InfoStatus>01/07/2020</InfoStatus>
          <InfoTitle>DATA DE ENTREGA</InfoTitle>
          <InfoStatus>--/--/----</InfoStatus>
        </InfoContent>
      </InfoContainer>
    </Container>
  );
};

export default StatusCard;
