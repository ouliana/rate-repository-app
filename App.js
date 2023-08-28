import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createAplolloClient from './src/utils/apolloClient';
import authStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import { ThemeProvider, createTheme } from '@rneui/themed';
import themeValues from './src/theme';
import { StyleSheet } from 'react-native';

const theme = createTheme(themeValues);

const styles = StyleSheet.create({
  main: {
    fontFamily: theme.fonts.main,
  },
});

const storage = authStorage();

const apolloClient = createAplolloClient(storage);

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NativeRouter>
          <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={storage}>
              <Main style={styles.main} />
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

