import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Text from './Text';

import { i18n } from '../utils/i18n';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        loading
      />
      <Text color="textSecondary">{i18n.t('loading')}</Text>
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
