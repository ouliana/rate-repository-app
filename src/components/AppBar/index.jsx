import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Text from '../Text';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import { useSignOut } from '../../hooks/useAuth';

import { useTheme } from '@rneui/themed';

const AppBar = () => {
  const [currentUser, setCurrentUser] = useState('');

  const signOut = useSignOut();
  const handleSignOut = async () => {
    try {
      await signOut();
      setCurrentUser('');
    } catch (e) {
      console.log('error: ', e);
    }
  };

  const { data, error } = useQuery(ME);

  useEffect(() => {
    if (data?.me) {
      setCurrentUser(data.me.username);
    } else {
      setCurrentUser('');
    }
  }, [data]);

  const { theme } = useTheme();

  if (error) {
    throw new Error(error.message);
  }

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
    tab: {
      paddingRight: 16,
    },
    // ...
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.tabs}
      >
        <AppBarTab
          text="Repositories"
          to="/"
        />

        {currentUser ? (
          <>
            <AppBarTab
              text="Create a review"
              to="/addreview"
            />
            <Pressable
              onPress={handleSignOut}
              style={styles.tab}
            >
              <Text
                color="textBackground"
                fontWeight="bold"
              >
                Sign out
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <AppBarTab
              text="Sign in"
              to="/signin"
            />
            <AppBarTab
              text="Sign up"
              to="/signup"
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
