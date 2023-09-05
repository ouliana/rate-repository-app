import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Rating from './Rating';
import ReviewDetails from './ReviewDetails';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const ReviewItem = ({ review, isMyReviewsView = false }) => {
  const globalStyles = useGlobalStyles();

  if (!review) return null;

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
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={globalStyles.primaryButton}
          containerStyle={styles.button}
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
