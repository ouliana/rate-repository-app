import useAddReview from '../../hooks/useAddReview';

import NewReviewContainer from './NewReviewContainer';

const NewReview = () => {
  const [addReview, result] = useAddReview();
  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      await addReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
      return result;
    } catch (e) {
      console.log('error: ', e);
    }
  };
  return <NewReviewContainer onSubmit={onSubmit} />;
};

export default NewReview;
