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
  },
});

const NewReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
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
        multiline={true}
      />
      <Pressable
        onPress={onSubmit}
        style={styles.button}
      >
        <Text
          color="textBackground"
          fontWeight="bold"
          style={{ textAlign: 'center' }}
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default NewReviewForm;
