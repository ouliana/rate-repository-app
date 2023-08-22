import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import SingleRepositoryContainer from './SingleRepositoryContainer';

const SingleRepository = () => {
  const { repositoryId } = useParams();

  const { repository } = useRepository(repositoryId);

  return <SingleRepositoryContainer repository={repository} />;
};

export default SingleRepository;
