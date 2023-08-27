import { useOrderValue } from '../../contexts/OrderContext';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import Text from '../Text';

const RepositoryList = () => {
  const order = useOrderValue();

  const { repositories, loading } = useRepositories(order);

  if (loading) return <Text>loading...</Text>;

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
