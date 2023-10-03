import { useOrderValue } from '../../contexts/OrderContext';
import { useSearchKeywordValue } from '../../contexts/SearchKeywordContext';
import { useLocaleValue } from '../../contexts/LocaleContext';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import Loading from '../Loading';
import Filter from './Filter';

const RepositoryList = () => {
  const order = useOrderValue();
  useLocaleValue();

  const searchKeyword = useSearchKeywordValue();

  const { repositories, fetchMore, loading } = useRepositories({
    order,
    searchKeyword,
    first: 8,
  });

  if (loading) return <Loading />;

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <Filter />
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
      />
    </>
  );
};

export default RepositoryList;
