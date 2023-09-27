import { View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { Button } from '@rneui/themed';

import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useLocaleValue } from '../../contexts/LocaleContext';
import { i18n } from '../../utils/i18n';
import { useNavigate } from 'react-router-native';

const NewReviewForm = ({ onSubmit }) => {
  const globalStyles = useGlobalStyles();

  // eslint-disable-next-line no-unused-vars
  const locale = useLocaleValue();

  const navigate = useNavigate();

  const onCancel = () => navigate('/');

  return (
    <View style={globalStyles.formContainer}>
      <FormikTextInput
        name="ownerName"
        placeholder={i18n.t('repositoryOwner')}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder={i18n.t('repositoryName')}
      />
      <FormikTextInput
        name="rating"
        placeholder={i18n.t('rating')}
      />
      <FormikTextInput
        name="text"
        placeholder={i18n.t('review')}
        multiline={true}
      />
      <Button
        onPress={onSubmit}
        title={i18n.t('createReviewButton')}
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

export default NewReviewForm;
