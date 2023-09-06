import { useState, useEffect } from 'react';
import useAddReview from '../../hooks/useAddReview';
import { useNavigate } from 'react-router-native';

import { View, StyleSheet } from 'react-native';
import NewReviewContainer from './NewReviewContainer';
import Text from '../Text';

const styles = StyleSheet.create({
  toast: {
    padding: 16,
  },
});

const NewReview = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [addReview, { error, data }] = useAddReview();
  const navigate = useNavigate();

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    await addReview({
      ownerName,
      repositoryName,
      rating: Number(rating),
      text,
    });
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error.graphQLErrors[0].message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  return (
    <>
      <Notify errorMessage={errorMessage} />
      <NewReviewContainer onSubmit={onSubmit} />
    </>
  );
};

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return (
    <View style={styles.toast}>
      <Text color="error">{errorMessage}</Text>
    </View>
  );
};

export default NewReview;
