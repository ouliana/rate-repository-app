import { View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';

import { Button } from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 24,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        onPress={onSubmit}
        title="Sign in"
      />
    </View>
  );
};

export default SignInForm;
