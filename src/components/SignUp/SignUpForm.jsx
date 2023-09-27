import { View } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import { Button } from '@rneui/themed';

import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';
import { useNavigate } from 'react-router-native';

const SignUpForm = ({ onSubmit }) => {
  const globalStyles = useGlobalStyles();
  // eslint-disable-next-line no-unused-vars
  const locale = useLocaleValue();
  const navigate = useNavigate();

  const onCancel = () => navigate('/');

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
      <FormikTextInput
        name="confirmedPassword"
        placeholder={i18n.t('confirmPassword')}
        secureTextEntry={true}
      />
      <Button
        onPress={onSubmit}
        title={i18n.t('signup')}
        buttonStyle={globalStyles.primaryButton}
        containerStyle={{
          marginVertical: 16,
        }}
        titleStyle={globalStyles.buttonTitle}
      />
      <Button
        onPress={onCancel}
        title={i18n.t('cancel')}
        type="outline"
        buttonStyle={globalStyles.buttonPrimaryOutline}
        titleStyle={globalStyles.buttonTitle}
      />
    </View>
  );
};

export default SignUpForm;
