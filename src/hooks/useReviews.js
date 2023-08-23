import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useReviews = repositoryId => {
  const [reviews, setReviews] = useState(null);
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    throw new Error(error.message);
  }

  useEffect(() => {
    if (data) {
      setReviews(data.repository.reviews.edges.map(r => r.node));
    }
  }, [data]);

  return { reviews, loading };
};

export default useReviews;
