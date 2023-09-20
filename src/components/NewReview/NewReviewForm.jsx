import { View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { Button } from '@rneui/themed';

import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useLocaleValue } from '../../contexts/LocaleContext';
import { i18n } from '../../utils/i18n';

const NewReviewForm = ({ onSubmit }) => {
  const globalStyles = useGlobalStyles();

  // eslint-disable-next-line no-unused-vars
  const locale = useLocaleValue();

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
        title={i18n.t('createReviewButton')}
        onPress={onSubmit}
        titleStyle={globalStyles.buttonTitle}
        containerStyle={globalStyles.button}
      />
    </View>
  );
};

export default NewReviewForm;
