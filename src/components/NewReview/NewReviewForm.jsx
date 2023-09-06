import { View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { Button } from '@rneui/themed';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const NewReviewForm = ({ onSubmit }) => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.formContainer}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        multiline={true}
      />
      <Button
        title="Create a review"
        onPress={onSubmit}
      />
    </View>
  );
};

export default NewReviewForm;
