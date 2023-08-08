import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    // ...
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.tabs}
      >
        <AppBarTab
          text="Sign in"
          to="/signin"
        />
        <AppBarTab
          text="Repositories"
          to="/"
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
