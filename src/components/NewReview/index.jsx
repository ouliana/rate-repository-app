import { useState, useEffect } from 'react';
import useAddReview from '../../hooks/useAddReview';
import { useNavigate } from 'react-router-native';

import NewReviewContainer from './NewReviewContainer';
import Notify from '../Notify';

import { i18n } from '../../utils/i18n';
import { useLocaleValue } from '../../contexts/LocaleContext';

const NewReview = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [addReview, { error, data }] = useAddReview();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const locale = useLocaleValue();

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      await addReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      if (error.message.match(/exist/gi)?.length) {
        setErrorMessage(`${i18n.t('repositoryDoesNotExist')}`);
      } else if (
        error.message.match(/User has already reviewed this repository/gi)
          ?.length
      ) {
        setErrorMessage(`${i18n.t('alreadyReviewed')}`);
      } else {
        setErrorMessage(`${i18n.t('otherErrorMessage   ')}`);
      }
    }
  }, [error, locale]);

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  return (
    <>
      <Notify errorMessage={errorMessage} />
      <NewReviewContainer onSubmit={onSubmit} />
    </>
  );
};

export default NewReview;
