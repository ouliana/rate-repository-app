import { View } from 'react-native';

import FormikTextInput from '../FormikTextInput';

import { Button } from '@rneui/themed';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const SignInForm = ({ onSubmit }) => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.formContainer}>
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
