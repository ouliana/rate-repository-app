import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW, GET_REPOSITORY } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useAddReview = () => {
  const authStorage = useAuthStorage();
  const [accessToken, setAccessToken] = useState('');

  const [createReview, result] = useMutation(CREATE_REVIEW, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    refetchQueries: [{ query: GET_REPOSITORY }],
    errorPolicy: 'all',
    onError: error => {
      throw new Error(error);
    },
  });

  useEffect(() => {
    (async () => {
      const response = await authStorage.getAccessToken();
      setAccessToken(response);
    })();
  }, [accessToken]);

  const addReview = async ({ ownerName, repositoryName, rating, text }) => {
    await createReview({
      variables: {
        ownerName,
        repositoryName,
        rating,
        text,
      },
    });
  };
  return [addReview, result];
};

export default useAddReview;
