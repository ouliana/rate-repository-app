import { View, StyleSheet } from 'react-native';
import Text from '../Text';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const Rating = ({ rating }) => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.rating}>
      <Text
        color="primary"
        fontWeight="bold"
        style={styles.text}
      >
        {rating}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { textAlign: 'center', lineHeight: 46 },
});

export default Rating;
