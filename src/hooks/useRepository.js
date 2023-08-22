import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = repositoryId => {
  const [repository, setRepository] = useState(null);
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    throw new Error(error.message);
  }

  useEffect(() => {
    if (data) {
      setRepository(data.repository);
    }
  }, [data]);

  return { repository, loading };
};

export default useRepository;
