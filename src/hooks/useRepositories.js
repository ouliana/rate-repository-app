import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { orderPrinciples } from '../utils/sorting';

const useRepositories = ({ order, ...other }) => {
  let variables = {
    orderBy: orderPrinciples[order].orderBy,
    orderDirection: orderPrinciples[order].orderDirection,
    ...other,
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories.edges,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
