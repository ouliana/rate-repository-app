import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onError: error => {
      throw new Error(error.message);
    },
  });
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ variables: { username, password } });
      const { accessToken } = data.authenticate;
      await authStorage.setAccessToken(accessToken);
      client.resetStore();

      return accessToken;
    } catch (e) {
      throw new Error('Error in signIn: ', e.message);
    }
  };

  return [signIn, result];
};

export default useSignIn;
