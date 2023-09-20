/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import { useTheme, Input } from '@rneui/themed';

const FormikTextInput = ({ name, ...props }) => {
  const { theme } = useTheme();

  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <Input
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      value={field.value}
      inputStyle={{ fontSize: theme.fontSizes.body }}
      errorStyle={{ color: theme.colors.error }}
      errorMessage={showError ? meta.error : ''}
      {...props}
    />
  );
};

export default FormikTextInput;
