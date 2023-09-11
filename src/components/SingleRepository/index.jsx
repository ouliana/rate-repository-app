import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import useReviews from '../../hooks/useReviews';
import SingleRepositoryContainer from './SingleRepositoryContainer';
import Loading from '../Loading';

const SingleRepository = () => {
  const { repositoryId } = useParams();

  const { repository } = useRepository(repositoryId);
  const { reviews, fetchMore, loading } = useReviews({
    repositoryId,
    first: 4,
  });

  if (loading) return <Loading />;

  const data = reviews ? reviews.map(edge => edge.node) : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <SingleRepositoryContainer
      repository={repository}
      reviews={data}
      onEndReach={onEndReach}
    />
  );
};

export default SingleRepository;
