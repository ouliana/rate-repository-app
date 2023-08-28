import { View, StyleSheet } from 'react-native';
import Text from '../Text';

import { format } from 'date-fns';

import { useTheme } from '@rneui/themed';

const ReviewItem = ({ review }) => {
  if (!review) return null;

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      padding: 16,
    },
    separator: {
      height: 10,
    },
    rating: {
      flexGrow: 0,
      width: 50,
      height: 50,
      borderWidth: 2,
      borderRadius: 25,
      borderColor: theme.colors.primary,
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

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
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

export default ReviewItem;
