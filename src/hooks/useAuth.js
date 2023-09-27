import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE, CREATE_USER } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE, {
    errorPolicy: 'all',
    onError: error => {
      throw new Error(error.message);
    },
  });
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { username, password },
      });
      const { accessToken } = data.authenticate;
      await authStorage.setAccessToken(accessToken);
      client.resetStore();

      return accessToken;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return [signIn, result];
};

export const useSignOut = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signOut = async () => {
    try {
      await authStorage.clearAccessToken();
      client.resetStore();
    } catch (e) {
      throw new Error('Error in signIn: ', e.message);
    }
  };

  return signOut;
};

export const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER, {
    errorPolicy: 'all',
    onError: error => {
      throw new Error(error.message);
    },
  });

  const signUp = async ({ username, password }) => {
    try {
      await mutate({ variables: { username, password } });
    } catch (e) {
      throw new Error('Error in signUp: ', e.message);
    }
  };

  return [signUp, result];
};
