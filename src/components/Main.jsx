import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import NewReview from '../components/NewReview';

import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
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
  );
};

export default Main;
