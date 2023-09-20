import { View, FlatList } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from '../ReviewItem';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const ItemSeparator = () => {
  const globalStyles = useGlobalStyles();

  return <View style={globalStyles.separator} />;
};

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

export default SingleRepositoryContainer;
