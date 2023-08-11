/* eslint-disable no-unused-vars */
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

import useSignIn from '../hooks/useSignIn';

import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 24,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 16,
    textAlign: 'center',
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username should consist of more than 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password should contain 8 or more symbols')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholderTextColor="#ccc"
        placeholder="Username"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit}>
        <Text
          color="textBackground"
          fontWeight="bold"
          style={styles.button}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async ({ username, password }) => {
    try {
      const accessToken = await signIn({ username, password });
      console.log('accessToken: ', accessToken);
    } catch (e) {
      console.log('error: ', e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
