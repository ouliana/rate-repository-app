/* eslint-disable no-unused-vars */
import { View, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  inputField: {
    width: '100%',
    padding: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: theme.fontSizes.body,
  },
  inputFieldValid: {
    borderColor: '#cccccc',
  },
  inputFieldInvalid: {
    borderColor: theme.colors.error,
  },
  container: {
    paddingBottom: 16,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.inputField,
          showError ? styles.inputFieldInvalid : styles.inputFieldValid,
        ]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && (
        <Text
          color="error"
          style={styles.errorText}
        >
          {meta.error}{' '}
        </Text>
      )}
    </View>
  );
};

export default FormikTextInput;
