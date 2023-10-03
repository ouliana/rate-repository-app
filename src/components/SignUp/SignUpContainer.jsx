import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const initialValues = {
  username: '',
  password: '',
  confirmedPassword: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, i18n.t('invalidNewUsername'))
    .max(30, i18n.t('invalidNewUsername'))
    .required(i18n.t('usernameRequired')),
  password: yup
    .string()
    .min(5, i18n.t('invalidNewPassword'))
    .max(30, i18n.t('invalidNewPassword'))
    .required(i18n.t('passwordRequired')),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], i18n.t('passwordsDoNotMatch'))
    .required(i18n.t('passwordConfirmationRequired')),
});

const SignUpContainer = ({ onSubmit }) => {
  useLocaleValue();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
