import { View, StyleSheet } from 'react-native';
import Text from './Text';

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

const styles = StyleSheet.create({
  toast: {
    padding: 16,
  },
});

export default Notify;
