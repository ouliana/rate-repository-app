import { useOrderValue } from '../../contexts/OrderContext';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import { Button } from '@rneui/themed';

const RepositoryList = () => {
  const order = useOrderValue();

  const { repositories, loading } = useRepositories(order);

  if (loading)
    return (
      <Button
        type="clear"
        loading
      />
    );

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
