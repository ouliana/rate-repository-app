/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import { Input } from '@rneui/themed';

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <Input
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      value={field.value}
      errorStyle={{ color: 'red' }}
      errorMessage={showError ? meta.error : ''}
      {...props}
    />
  );
};

export default FormikTextInput;
