import { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet, Platform } from 'react-native';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const Filter = () => {
  const globalStyles = useGlobalStyles();

  const [value, setValue] = useState('');

  const updateSearch = value => {
    setValue(value);
  };

  return (
    <SearchBar
      platform="ios"
      containerStyle={globalStyles.container}
      inputContainerStyle={globalStyles.background}
      // inputStyle={{}}
      // leftIconContainerStyle={{}}
      // rightIconContainerStyle={{}}
      // loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      // onClearText={() => console.log(onClearText())}
      placeholder="Type query here..."
      placeholderTextColor="#888"
      clearIcon={{ type: 'antdesign', name: 'close' }}
      // showCancel
      // cancelButtonTitle="Cancel"
      // cancelButtonProps={{}}
      // onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  search: {},
});

export default Filter;
