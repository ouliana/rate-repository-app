import { FlatList, View, StyleSheet, Pressable, Platform } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import OrderPickerBottomsheet from './OrderPickerBottomsheet';
import OrderPicker from './OrderPicker';
<Filter />;
import Filter from './Filter';

const ItemSeparator = () => <View style={styles.separator} />;

const SelectOrderComponent = () => {
  if (Platform.OS === 'ios') return <OrderPickerBottomsheet />;
  return <OrderPicker />;
};

const Header = () => {
  return (
    <>
      <Filter />
      <SelectOrderComponent />
    </>
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
      ListHeaderComponent={() => <Header />}
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
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
  search: {},
});

export default RepositoryListContainer;
