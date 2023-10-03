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
        label={i18n.t('repositoryOwner')}
        placeholder={i18n.t('repositoryOwnerPlaceholder')}
      />
      <FormikTextInput
        name="repositoryName"
        label={i18n.t('repositoryName')}
        placeholder={i18n.t('repositoryNamePlaceholder')}
      />
      <FormikTextInput
        name="rating"
        label={i18n.t('rating')}
        placeholder={i18n.t('ratingPlaceholder')}
      />
      <FormikTextInput
        name="text"
        label={i18n.t('review')}
        placeholder={i18n.t('reviewPlaceholder')}
        multiline={true}
      />
      <Button
        onPress={onSubmit}
        title={i18n.t('createReviewButton')}
        buttonStyle={globalStyles.primaryButton}
        containerStyle={{
          marginVertical: 16,
          marginHorizontal: 8,
        }}
        titleStyle={globalStyles.buttonTitle}
      />
      <Button
        onPress={onCancel}
        title={i18n.t('cancel')}
        type="outline"
        buttonStyle={globalStyles.buttonPrimaryOutline}
        titleStyle={globalStyles.buttonTitle}
        containerStyle={{
          marginHorizontal: 8,
        }}
      />
    </View>
  );
};

export default NewReviewForm;
