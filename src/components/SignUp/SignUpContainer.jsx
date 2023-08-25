import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  confirmedPassword: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username should consist of 5 to 30 characters')
    .max(30, 'Username should consist of 5 to 30 characters')
    .required('username is required'),
  password: yup
    .string()
    .min(5, 'Password should consist of 5 to 30 characters')
    .max(30, 'Password should consist of 5 to 30 characters')
    .required('Password is required'),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirm is required'),
});

const SignUpContainer = ({ onSubmit }) => {
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
