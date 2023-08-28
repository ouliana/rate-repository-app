import { View, Pressable, StyleSheet } from 'react-native';

import Text from '../Text';
import FormikTextInput from '../FormikTextInput';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 24,
  },
  button: {
    backgroundColor: 'blue',
    // backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 16,
    textAlign: 'center',
  },
});

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
      <Pressable
        onPress={onSubmit}
        style={styles.button}
      >
        <Text
          color="textBackground"
          fontWeight="bold"
          style={{ textAlign: 'center' }}
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
