import { View } from 'react-native';

import FormikTextInput from '../FormikTextInput';

import { Button } from '@rneui/themed';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const SignInForm = ({ onSubmit }) => {
  const globalStyles = useGlobalStyles();
  // eslint-disable-next-line no-unused-vars
  const locale = useLocaleValue();

  return (
    <View style={globalStyles.formContainer}>
      <FormikTextInput
        name="username"
        placeholder={i18n.t('username')}
      />
      <FormikTextInput
        name="password"
        placeholder={i18n.t('password')}
        secureTextEntry={true}
      />
      <Button
        onPress={onSubmit}
        title={i18n.t('signin')}
        titleStyle={globalStyles.buttonTitle}
        containerStyle={globalStyles.button}
      />
    </View>
  );
};

export default SignInForm;
