import { View } from 'react-native';

import FormikTextInput from '../FormikTextInput';

import { Button } from '@rneui/themed';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';
import { useNavigate } from 'react-router-native';

const SignInForm = ({ onSubmit }) => {
  useLocaleValue();
  const globalStyles = useGlobalStyles();
  const navigate = useNavigate();

  const onCancel = () => navigate('/');

  return (
    <View>
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
        <Button
          onPress={onSubmit}
          title={i18n.t('signin')}
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
    </View>
  );
};

export default SignInForm;
