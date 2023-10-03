import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, i18n.t('invalidUsername'))
    .required(i18n.t('usernameRequired')),
  password: yup
    .string()
    .min(8, i18n.t('invalidPassword'))
    .required(i18n.t('passwordRequired')),
});

const SignInContainer = ({ onSubmit }) => {
  useLocaleValue();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;
