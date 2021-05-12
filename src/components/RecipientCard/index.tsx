import React from 'react';
import { IRecipient } from '../../dtos/IRecipient';

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

interface IRecipientProps {
  recipient: IRecipient;
}

const RecipientCard: React.FC<IRecipientProps> = ({ recipient }) => {
  const fullAddress = `${recipient.street}, ${recipient.number} \n${recipient.neighborhood}, ${recipient.uf} \n${recipient.zip_code}`;
  return (
    <Container>
      <DataContent>
        <DataIcon name="assignment" size={24} color="#FFC042" />
        <DataText>Dados</DataText>
      </DataContent>
      <RecipientContent>
        <Title>DESTINATÁRIO</Title>
        <RecipientData>{recipient.name}</RecipientData>
      </RecipientContent>
      <AddressContent>
        <Title>ENDEREÇO</Title>
        <RecipientData>{fullAddress}</RecipientData>
      </AddressContent>
    </Container>
  );
};

export { RecipientCard };
