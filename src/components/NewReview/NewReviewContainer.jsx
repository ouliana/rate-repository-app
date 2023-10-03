import { Formik } from 'formik';
import NewReviewForm from './NewReviewForm';

import * as Yup from 'yup';
import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required(i18n.t('ownerNameRequired')),
  repositoryName: Yup.string().required(i18n.t('repositoryNameRequired')),
  rating: Yup.number()
    .required(i18n.t('ratingRequired'))
    .integer()
    .min(1, i18n.t('invalidRatingValue'))
    .max(100, i18n.t('invalidRatingValue')),
  text: Yup.string(),
});

const NewReviewContainer = ({ onSubmit }) => {
  useLocaleValue();

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
