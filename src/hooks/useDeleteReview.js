import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';

const useDeleteReview = deleteReviewId => {
  const [mutation, result] = useMutation(DELETE_REVIEW, {
    variables: {
      deleteReviewId,
    },
    refetchQueries: [
      {
        query: GET_CURRENT_USER,
        variables: { includeReviews: true },
      },
    ],
    errorPolicy: 'all',
    onError: error => {
      throw new Error(error);
    },
  });

  const deleteReview = async () => {
    await mutation();
  };
  return [deleteReview, result];
};

export default useDeleteReview;
