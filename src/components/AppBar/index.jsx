import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/queries';
import { useSignOut } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-native';

import Text from '../Text';
import AppBarTab from './AppBarTab';
import SettingsBottomsheet from '../SettingsBottomsheet';

import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const AppBar = () => {
  const globalStyles = useGlobalStyles();
  const [currentUser, setCurrentUser] = useState('');
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const locale = useLocaleValue();

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
      <SettingsBottomsheet />
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
            <Pressable
              onPress={handleSignOut}
              style={styles.tab}
            >
              <Text
                color="textPrimary"
                fontWeight="bold"
              >
                {i18n.t('signOut')}
              </Text>
            </Pressable>
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
  },
  scrollView: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  tab: {
    paddingRight: 16,
  },
});

export default AppBar;
