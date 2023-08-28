import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { Button } from '@rneui/themed';

const NewReviewForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      paddingTop: 24,
    },
  });

  return (
    <View style={styles.container}>
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
