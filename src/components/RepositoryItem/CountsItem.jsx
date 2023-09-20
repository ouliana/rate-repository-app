import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const CountsItem = ({ value, label }) => {
  if (value > 1000) {
    value = Number.parseFloat(value / 1000).toFixed(1) + 'k';
  }
  return (
    <View style={styles.item}>
      <Text
        color="textPrimary"
        fontWeight="bold"
      >
        {value}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default CountsItem;
