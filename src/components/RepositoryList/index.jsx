import { useOrderValue } from '../../contexts/OrderContext';
import { useSearchKeywordValue } from '../../contexts/SearchKeywordContext';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import Loading from '../Loading';
import Filter from './Filter';

const RepositoryList = () => {
  const order = useOrderValue();
  const searchKeyword = useSearchKeywordValue();

  const { repositories, loading } = useRepositories({
    order,
    searchKeyword,
  });

  if (loading) return <Loading />;

  return (
    <>
      <Filter />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;
