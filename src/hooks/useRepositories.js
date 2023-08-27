import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

import { orderPrinciples } from '../utils/sorting';

const useRepositories = order => {
  const [repositories, setRepositories] = useState([]);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: orderPrinciples[order].orderBy,
      orderDirection: orderPrinciples[order].orderDirection,
    },
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
