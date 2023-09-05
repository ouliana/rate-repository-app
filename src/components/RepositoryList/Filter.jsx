import { useState, useContext } from 'react';
import SearchKeywordContext from '../../contexts/SearchKeywordContext';
import { useDebouncedCallback } from 'use-debounce';

import { SearchBar } from '@rneui/themed';
import { Platform, StyleSheet } from 'react-native';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const Filter = () => {
  const globalStyles = useGlobalStyles();

  const [searchKeyword, dispatch] = useContext(SearchKeywordContext);
  const [value, setValue] = useState(searchKeyword);

  const debounced = useDebouncedCallback(() => {
    dispatch({
      type: 'SET',
      payload: value,
    });
  }, 800);

  const updateSearch = newValue => {
    setValue(newValue);
    debounced();
  };

  const clearText = () => {
    setValue('');
    debounced();
  };

  return (
    <SearchBar
      platform={Platform.OS}
      containerStyle={{
        ...globalStyles.container,
        ...styles.searchContainer,
      }}
      inputContainerStyle={globalStyles.background}
      onChangeText={newVal => updateSearch(newVal)}
      onClear={clearText}
      placeholder="Type query here..."
      placeholderTextColor="#888"
      clearIcon={{ type: 'ionicon', name: 'close-circle' }}
      onCancel={() => clearText()}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default Filter;
