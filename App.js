import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';
import { StyleSheet } from 'react-native';
import theme from './src/theme';

const styles = StyleSheet.create({
  main: {
    fontFamily: theme.fonts.main,
  },
});

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main style={styles.main} />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

