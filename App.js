import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createAplolloClient from './src/utils/apolloClient';
import authStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import { StyleSheet } from 'react-native';
import theme from './src/theme';

const styles = StyleSheet.create({
  main: {
    fontFamily: theme.fonts.main,
  },
});

const storage = authStorage();

const apolloClient = createAplolloClient(storage);

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={storage}>
            <Main style={styles.main} />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

