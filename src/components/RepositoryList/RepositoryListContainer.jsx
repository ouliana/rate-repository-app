import { FlatList, View, StyleSheet, Pressable, Platform } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import OrderPickerBottomsheet from './OrderPickerBottomsheet';
import OrderPicker from './OrderPicker';

const ItemSeparator = () => <View style={styles.separator} />;

const SelectOrderComponent = () => {
  if (Platform.OS === 'ios') return <OrderPickerBottomsheet />;
  return <OrderPicker />;
};

const Header = () => {
  return (
    <>
      <SelectOrderComponent />
    </>
  );
};

const RepositoryListContainer = ({ repositories, onEndReach }) => {
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default RepositoryListContainer;
