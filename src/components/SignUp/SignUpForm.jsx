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
        label={i18n.t('username')}
        placeholder={i18n.t('usernamePlaceholder')}
      />
      <FormikTextInput
        name="password"
        label={i18n.t('password')}
        placeholder={i18n.t('passwordPlaceholder')}
      />
      <FormikTextInput
        name="confirmedPassword"
        label={i18n.t('confirmPassword')}
        placeholder={i18n.t('confirmPasswordPlaceholder')}
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
