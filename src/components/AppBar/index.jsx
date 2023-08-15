import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Text from '../Text';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';

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
  console.log({ data });

  useEffect(() => {
    if (data?.me) {
      setCurrentUser(data.me.username);
    } else {
      setCurrentUser('');
    }
  }, [data]);

  if (error) {
    throw new Error(error.message);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.tabs}
      >
        {currentUser ? (
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
        ) : (
          <AppBarTab
            text="Sign in"
            to="/signin"
          />
        )}
        <AppBarTab
          text="Repositories"
          to="/"
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
