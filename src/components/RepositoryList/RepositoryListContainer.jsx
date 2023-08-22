import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            console.log(`/${item.id}`);
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
