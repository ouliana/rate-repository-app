import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';

import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigate } from 'react-router-native';

import { orderValues } from '../../utils/sorting';

import RepositoryItem from '../RepositoryItem';
import uuid from 'react-native-uuid';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const OrderPicker = () => {
  const [order, dispatch] = useContext(OrderContext);

  const handleOnValueChange = itemValue => {
    dispatch({
      type: 'SET',
      payload: itemValue,
    });
  };
  return (
    <Picker
      selectedValue={order}
      onValueChange={itemValue => handleOnValueChange(itemValue)}
    >
      {orderValues.map(value => (
        <Picker.Item
          key={uuid.v4()}
          label={value}
          value={value}
        />
      ))}
    </Picker>
  );
};

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <OrderPicker />}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigate(`/${item.id}`);
          }}
        >
          <RepositoryItem item={item} />
        </Pressable>
      )}
      // other props
      style={styles.container}
    />
  );
};

export default RepositoryListContainer;
