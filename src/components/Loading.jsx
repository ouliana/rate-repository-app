import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Text from './Text';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        loading
      />
      <Text color="textSecondary">LOADING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
