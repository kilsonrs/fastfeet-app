import React from 'react';

import { Container, TextInput, Icon } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <TextInput placeholder="Filtrar por bairro" />
      <Icon name="search" size={24} color="#BEBCCC" />
    </Container>
  );
};

export { SearchInput };
