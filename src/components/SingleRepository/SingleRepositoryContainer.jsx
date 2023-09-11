import { View, FlatList, StyleSheet } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from '../ReviewItem';

const ItemSeparator = () => <View style={styles.separator} />;

const Header = ({ repository }) => {
  return (
    <View>
      <RepositoryInfo repository={repository} />
      <ItemSeparator />
    </View>
  );
};

const SingleRepositoryContainer = ({ repository, reviews, onEndReach }) => {
  return (
    <FlatList
      data={reviews}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <Header repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
});

export default SingleRepositoryContainer;
