import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import { format } from 'date-fns';

const ReviewDetails = ({ header, createdAt, text }) => {
  return (
    <View style={styles.details}>
      <Text fontWeight="bold">{header}</Text>
      <Text color="textSecondary">
        {format(new Date(createdAt), 'dd.MM.yyyy')}
      </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    gap: 8,
  },
  text: {
    marginTop: 8,
  },
});

export default ReviewDetails;
