import { useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
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

export default useSignOut;
