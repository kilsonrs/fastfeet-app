import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  Input,
  Icon,
  SearchResult,
  SearchResultItem,
  SearchResultText,
} from './styles';

interface SearchNeighborhoodProps {
  id: string;
  name: string;
}

interface ISearchProps {
  handleSearchNeighborhood: (neighborhood: string | null) => void;
}

const SearchInput: React.FC<ISearchProps> = ({ handleSearchNeighborhood }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState();

  const [neighborhoods, setNeighborhoods] = useState<
    SearchNeighborhoodProps[]
  >();

  useEffect(() => {
    if (!searchText) {
      return;
    }
    api
      .get('/neighborhoods', {
        params: {
          neighborhood: searchText,
        },
      })
      .then(response => {
        setNeighborhoods(response.data);
        setIsVisible(true);
      });
  }, [searchText]);

  const handleSelect = useCallback(
    neighborhood => {
      handleSearchNeighborhood(neighborhood);
      setIsVisible(false);
    },
    [handleSearchNeighborhood],
  );

  const handleSearch = useCallback(
    text => {
      if (text === '') {
        setIsVisible(false);
        setNeighborhoods([]);
        handleSelect(null);
      }
      setSearchText(text);
    },
    [handleSelect],
  );

  const handleBlur = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleFocus = useCallback(() => {
    if (neighborhoods) {
      setIsVisible(true);
    }
  }, [neighborhoods]);

  return (
    <Container>
      <Input
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Filtrar por bairro"
        onChangeText={handleSearch}
      />
      <Icon name="search" size={24} color="#BEBCCC" />
      {isVisible && (
        <SearchResult>
          {neighborhoods.map(neighborhood => (
            <SearchResultItem
              key={neighborhood.id}
              onPress={() => handleSelect(neighborhood.name)}
            >
              <SearchResultText>{neighborhood.name}</SearchResultText>
            </SearchResultItem>
          ))}
        </SearchResult>
      )}
    </Container>
  );
};

export { SearchInput };
