import { FlatList, View, StyleSheet, Pressable, Platform } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import OrderPickerModal from './OrderPickerModal';
import OrderPicker from './OrderPicker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SelectOrderComponent = () => {
  if (Platform.OS === 'ios') return <OrderPickerModal />;
  return <OrderPicker />;
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
      ListHeaderComponent={() => <SelectOrderComponent />}
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
