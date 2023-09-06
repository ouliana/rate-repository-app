import { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Rating from './Rating';
import ReviewDetails from './ReviewDetails';
import useDeleteReview from '../../hooks/useDeleteReview';
import ConfirmDelete from './ConfirmDelete';

import { useNavigate } from 'react-router-native';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const ReviewItem = ({ review, isMyReviewsView = false }) => {
  const globalStyles = useGlobalStyles();
  const [repositoryID, setRepositoryID] = useState('');

  const [deleteReview, { error: deleteError }] = useDeleteReview(review.id);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const navigate = useNavigate();

  if (!review) return null;

  if (deleteError) {
    throw new Error('Error while deleting review');
  }

  const header = isMyReviewsView
    ? review.repository.fullName
    : review.user.username;

  useEffect(() => {
    if (isConfirmed) {
      (async () => {
        await deleteReview();
      })();
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (repositoryID) navigate(`/${repositoryID}`);
  }, [repositoryID]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Rating rating={review.rating} />
        <ReviewDetails
          header={header}
          createdAt={review.createdAt}
          text={review.text}
        />
      </View>
      {isMyReviewsView && (
        <View style={styles.buttonsContainer}>
          <Button
            buttonStyle={globalStyles.primaryButton}
            containerStyle={styles.button}
            onPress={() => setRepositoryID(review.repositoryId)}
          >
            View repository
          </Button>
          <Button
            buttonStyle={globalStyles.dangerButton}
            containerStyle={styles.button}
            onPress={() =>
              ConfirmDelete({ repository: header, setIsConfirmed })
            }
          >
            Delete review
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    padding: 16,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  button: {
    width: '48%',
  },
});

export default ReviewItem;
