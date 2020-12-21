import React from 'react';

import { Container, TextInput, Icon } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <TextInput />
      <Icon name="search" size={24} color="#BEBCCC" />
    </Container>
  );
};

export default SearchInput;
