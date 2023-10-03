/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useField } from 'formik';
import { useTheme, Input, Icon } from '@rneui/themed';

const FormikTextInput = ({ name, ...props }) => {
  const { theme } = useTheme();

  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const isSecureText =
    name === 'password' || name === 'confirmedPassword' ? true : false;
  const [isSecureTextVisible, setIsSecureTextVisible] = useState(!isSecureText);

  return (
    <Input
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      labelStyle={{
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.normal,
        fontSize: theme.fontSizes.small,
      }}
      value={field.value}
      inputStyle={{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
      }}
      rightIcon={
        <Icon
          type="ionicon"
          name={isSecureTextVisible ? 'eye-off-outline' : 'eye-outline'}
          color={
            field.value && isSecureText
              ? theme.colors.textSecondary
              : theme.colors.backgroundContainer
          }
          onPress={() => setIsSecureTextVisible(!isSecureTextVisible)}
          size={20}
          // containerStyle={{ margin: 0, padding: 0 }}
        />
      }
      secureTextEntry={!isSecureTextVisible}
      errorStyle={{ color: theme.colors.error }}
      errorMessage={showError ? meta.error : ''}
      {...props}
    />
  );
};

export default FormikTextInput;
