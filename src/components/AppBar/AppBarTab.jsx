import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { i18n } from '../../utils/i18n';

import Text from '../Text';

const AppBarTab = ({ text, to }) => {
  return (
    <View style={styles.tab}>
      <Link
        underlayColor="transparent"
        to={to}
      >
        <Text
          color="textPrimary"
          fontWeight="bold"
        >
          {i18n.t(text)}
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingRight: 16,
  },
});

export default AppBarTab;
