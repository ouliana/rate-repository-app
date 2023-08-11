import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    throw new Error(error.message);
  }

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories.edges);
    }
  }, [data]);

  return { repositories, loading };
};

export default useRepositories;
