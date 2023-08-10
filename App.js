import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createAplolloClient from './src/utils/apolloClient';

import { StyleSheet } from 'react-native';
import theme from './src/theme';

const styles = StyleSheet.create({
  main: {
    fontFamily: theme.fonts.main,
  },
});

const apolloClient = createAplolloClient();

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main style={styles.main} />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

