/* eslint-disable no-unused-vars */
import SignInContainer from './SignInContainer';
import { useNavigate } from 'react-router-native';

import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    try {
      const accessToken = await signIn({ username, password });
      console.log('accessToken: ', accessToken);
      navigate('/');
    } catch (e) {
      console.log('error: ', e);
    }
  };
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
