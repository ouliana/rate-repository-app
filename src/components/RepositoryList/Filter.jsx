import { useState, useContext } from 'react';
import SearchKeywordContext from '../../contexts/SearchKeywordContext';
import { useDebouncedCallback } from 'use-debounce';

import { useTheme, SearchBar } from '@rneui/themed';
import { Platform, StyleSheet } from 'react-native';

import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';

const Filter = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();

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

  const searchContainerStyle =
    Platform.OS === 'ios'
      ? {
          backgroundColor: theme.colors.background,
          ...styles.searchContainerIOS,
        }
      : styles.searchContainer;

  return (
    <SearchBar
      platform={Platform.OS}
      containerStyle={searchContainerStyle}
      inputContainerStyle={globalStyles.search}
      onChangeText={newVal => updateSearch(newVal)}
      onClear={() => updateSearch('')}
      placeholder={i18n.t('search')}
      placeholderTextColor="#888"
      clearIcon={{ type: 'ionicon', name: 'close-circle' }}
      onCancel={() => updateSearch('')}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  searchContainerIOS: {
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default Filter;
