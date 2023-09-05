import { useOrderValue } from '../../contexts/OrderContext';
import { useSearchKeywordValue } from '../../contexts/SearchKeywordContext';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Filter from './Filter';

import Text from '../Text';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        loading
      />
      <Text>loading...</Text>
    </View>
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RepositoryList;
