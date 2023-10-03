/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { View } from 'react-native';

import SignInContainer from './SignInContainer';
import Notify from '../Notify';

import { useNavigate } from 'react-router-native';

import { useSignIn } from '../../hooks/useAuth';

import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const SignIn = () => {
  useLocaleValue();

  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      if (e.message.match(/Invalid username or password/gi)?.length) {
        setErrorMessage(i18n.t('invalidUsernameOrPassword'));
        setTimeout(() => setErrorMessage(''), 5000);
      } else {
        setErrorMessage(i18n.t('otherErrorMessage'));
        setTimeout(() => setErrorMessage(''), 5000);
      }
    }
  };

  return (
    <View>
      <Notify errorMessage={errorMessage} />
      <SignInContainer onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
