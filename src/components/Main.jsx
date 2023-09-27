import { useEffect } from 'react';
import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import NewReview from '../components/NewReview';
import ReviewList from '../components/ReviewList';
import AppBar from './AppBar';

import { OrderContextProvider } from '../contexts/OrderContext';
import { SearchKeywordContextProvider } from '../contexts/SearchKeywordContext';
import { LocaleContextProvider } from '../contexts/LocaleContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useGlobalStyles from '../hooks/useGlobalStyles';
import { useThemeMode } from '@rneui/themed';

const Main = () => {
  const globalStyles = useGlobalStyles();

  const { mode, setMode } = useThemeMode();

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('mode');
        if (value !== null && (!mode || value !== mode)) {
          setMode(value);
        }
      } catch (e) {
        return null;
      }
    })();
  }, []);

  return (
    <LocaleContextProvider>
      <SearchKeywordContextProvider>
        <OrderContextProvider>
          <View style={globalStyles.main}>
            <AppBar />

            <Routes>
              <Route
                path="/"
                element={<RepositoryList />}
                exact
              />
              <Route
                path="/:repositoryId"
                element={<SingleRepository />}
              />
              <Route
                path="/signup"
                element={<SignUp />}
              />
              <Route
                path="/signin"
                element={<SignIn />}
              />
              <Route
                path="/addreview"
                element={<NewReview />}
              />
              <Route
                path="/reviews"
                element={<ReviewList />}
              />
              <Route
                path="*"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />
            </Routes>
          </View>
        </OrderContextProvider>
      </SearchKeywordContextProvider>
    </LocaleContextProvider>
  );
};

export default Main;
