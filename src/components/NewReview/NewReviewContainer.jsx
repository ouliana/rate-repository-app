import { Formik } from 'formik';
import NewReviewForm from './NewReviewForm';

import * as Yup from 'yup';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: 1,
  text: '',
};

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required(`Repository owner's username is required`),
  repositoryName: Yup.string().required(`Repository's name is required`),
  rating: Yup.number()
    .required(`Rating is required`)
    .integer()
    .min(1, 'Rating should be a number between 0 and 100')
    .max(100, 'Rating should be a number between 0 and 100'),
  text: Yup.string(),
});

const NewReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <NewReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default NewReviewContainer;
