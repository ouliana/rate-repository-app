import { View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import { Button } from '@rneui/themed';

const SignUpForm = ({ onSubmit }) => {
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
      <FormikTextInput
        name="confirmedPassword"
        placeholder="confirm password"
        placeholderTextColor="#ccc"
        secureTextEntry={true}
      />
      <Button
        onPress={onSubmit}
        title="Sign up"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 24,
  },
});

export default SignUpForm;
