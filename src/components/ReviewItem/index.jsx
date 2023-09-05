import { View, StyleSheet } from 'react-native';
import Rating from './Rating';
import ReviewDetails from './ReviewDetails';

const ReviewItem = ({ review, user }) => {
  if (!review) return null;

  const header = user ? user : review.repository.fullName;

  return (
    <View style={styles.container}>
      <Rating rating={review.rating} />
      <ReviewDetails
        header={header}
        createdAt={review.createdAt}
        text={review.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    backgroundColor: '#ffffff',
  },
});

export default ReviewItem;
