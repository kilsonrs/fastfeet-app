import React from 'react';

import {
  Container,
  DataContent,
  DataIcon,
  DataText,
  RecipientContent,
  Title,
  RecipientData,
  AddressContent,
} from './styles';

const RecipientCard: React.FC = () => {
  return (
    <Container>
      <DataContent>
        <DataIcon name="assignment" size={24} color="#FFC042" />
        <DataText>Dados</DataText>
      </DataContent>
      <RecipientContent>
        <Title>DESTINATÁRIO</Title>
        <RecipientData>Diego Fernandes</RecipientData>
      </RecipientContent>
      <AddressContent>
        <Title>ENDEREÇO</Title>
        <RecipientData>
          {'Rua Guilherme Gemballa, 260 \nJardim América, SC \n89 168-000'}
        </RecipientData>
      </AddressContent>
    </Container>
  );
};

export default RecipientCard;
