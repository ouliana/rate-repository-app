import { useQuery } from '@apollo/client';
import { View, FlatList, StyleSheet } from 'react-native';
import ReviewItem from '../ReviewItem';
import Loading from '../Loading';

import { GET_CURRENT_USER } from '../../graphql/queries';

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = () => {
  const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Loading />;

  if (error) {
    console.log('Error');
    throw new Error(error);
  }

  const reviews = data ? data.me.reviews.edges.map(e => e.node) : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          // key={item.repositoryId}
          review={item}
          isMyReviewsView
        />
      )}
      keyExtractor={({ id }) => id}
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

export default ReviewList;
