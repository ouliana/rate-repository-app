import { useOrderValue } from '../../contexts/OrderContext';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        loading
      />
    </View>
  );
};

const RepositoryList = () => {
  const order = useOrderValue();

  const { repositories, loading } = useRepositories(order);
  if (loading) return <Loading />;

  return <RepositoryListContainer repositories={repositories} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RepositoryList;
