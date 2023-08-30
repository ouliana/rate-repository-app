import { View, StyleSheet } from 'react-native';
import Text from '../Text';

import { format } from 'date-fns';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const ReviewItem = ({ review }) => {
  const globalStyles = useGlobalStyles();

  if (!review) return null;

  return (
    <View style={styles.container}>
      <View style={globalStyles.rating}>
        <Text
          color="primary"
          fontWeight="bold"
          style={{ textAlign: 'center', lineHeight: 46 }}
        >
          {review.rating}
        </Text>
      </View>
      <View style={styles.details}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        {/* <Text color="textSecondary">{displayDate(review.createdAt)}</Text> */}
        <Text style={styles.text}>{review.text}</Text>
      </View>
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
  separator: {
    height: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    marginTop: 8,
  },
});

export default ReviewItem;
