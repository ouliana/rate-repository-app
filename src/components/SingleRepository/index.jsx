import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import useReviews from '../../hooks/useReviews';

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

const SingleRepository = () => {
  const { repositoryId } = useParams();

  const { repository } = useRepository(repositoryId);
  const { reviews } = useReviews(repositoryId);

  return (
    <FlatList
      data={reviews}
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

export default SingleRepository;
