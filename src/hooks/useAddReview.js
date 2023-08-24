import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useAddReview = () => {
  console.log('useAddReview');

  const authStorage = useAuthStorage();
  const [accessToken, setAccessToken] = useState('');

  const [mutate, result] = useMutation(CREATE_REVIEW, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    onError: error => {
      throw new Error(error.message);
    },
  });

  useEffect(() => {
    (async () => {
      const response = await authStorage.getAccessToken();
      setAccessToken(response);
    })();
  }, [accessToken]);

  const addReview = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      await mutate({
        variables: {
          ownerName,
          repositoryName,
          rating,
          text,
        },
      });
    } catch (e) {
      throw new Error('Error in addReview: ', e.message);
    }
  };

  return [addReview, result];
};

export default useAddReview;
