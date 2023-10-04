import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/queries';
import { useSignOut } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-native';

import AppBarTab from './AppBarTab';
import TopButtonsContainer from './TopButtonsContainer';

import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useLocaleValue } from '../../contexts/LocaleContext';

const AppBar = () => {
  useLocaleValue();
  const globalStyles = useGlobalStyles();
  const [currentUser, setCurrentUser] = useState('');
  const navigate = useNavigate();

  const signOut = useSignOut();
  const handleSignOut = async () => {
    try {
      await signOut();
      setCurrentUser('');
      navigate('/');
    } catch (e) {
      console.log('error: ', e);
    }
  };

  const { data, error } = useQuery(GET_CURRENT_USER);
  if (error) {
    throw new Error(error.message);
  }

  useEffect(() => {
    if (data?.me) {
      setCurrentUser(data.me.username);
    } else {
      setCurrentUser('');
    }
  }, [data]);

  return (
    <View style={globalStyles.header}>
      <TopButtonsContainer
        currentUser={currentUser}
        handleSignOut={handleSignOut}
      />
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.tabs}
      >
        <AppBarTab
          text="repositories"
          to="/"
        />

        {currentUser ? (
          <>
            <AppBarTab
              text="createReview"
              to="/addreview"
            />
            <AppBarTab
              text="myReviews"
              to="/reviews"
            />
          </>
        ) : (
          <>
            <AppBarTab
              text="signIn"
              to="/signin"
            />
            <AppBarTab
              text="signUp"
              to="/signup"
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  scrollView: {
    paddingVertical: 16,
  },
});

export default AppBar;
