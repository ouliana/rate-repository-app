import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useReviews = ({ repositoryId, ...other }) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
    variables: { repositoryId, ...other },
    fetchPolicy: 'cache-and-network',
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  const handleFetchMore = () => {
    console.log('handleFetchMore');
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId,
        ...other,
      },
    });
  };

  return {
    reviews: data?.repository.reviews.edges,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useReviews;
