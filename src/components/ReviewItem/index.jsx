import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Rating from './Rating';
import ReviewDetails from './ReviewDetails';

import { useNavigate } from 'react-router-native';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const ReviewItem = ({ review, isMyReviewsView = false }) => {
  const globalStyles = useGlobalStyles();
  const [repositoryToView, setRepositoryToView] = useState('');

  const navigate = useNavigate();

  if (!review) return null;

  useEffect(() => {
    if (repositoryToView) navigate(`/${repositoryToView}`);
  }, [repositoryToView]);

  const header = isMyReviewsView
    ? review.repository.fullName
    : review.user.username;
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
            onPress={() => setRepositoryToView(review.repositoryId)}
          >
            View repository
          </Button>
          <Button
            buttonStyle={globalStyles.dangerButton}
            containerStyle={styles.button}
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
