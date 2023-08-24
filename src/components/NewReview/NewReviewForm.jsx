import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 24,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 16,
    textAlign: 'center',
  },
});

const NewReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name="ownerName"
        placeholderTextColor="#ccc"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        placeholderTextColor="#ccc"
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        placeholderTextColor="#ccc"
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        placeholderTextColor="#ccc"
      />
      <Pressable onPress={onSubmit}>
        <Text
          color="textBackground"
          fontWeight="bold"
          style={styles.button}
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default NewReviewForm;
