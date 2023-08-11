import { View, StyleSheet, Image } from 'react-native';
import CountsItem from './CountsItem';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 16,
    flexGrow: 1,
    flexShrink: 1,
  },
  language: {
    padding: 4,
    marginTop: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexGrow: 0,
  },
  counts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.details}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style={styles.language}>
            <Text color="textBackground">{item.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.counts}>
        <CountsItem
          value={item.stargazersCount}
          label="Stars"
        />
        <CountsItem
          value={item.forksCount}
          label="Forks"
        />
        <CountsItem
          value={item.reviewCount}
          label="Reviews"
        />
        <CountsItem
          value={item.ratingAverage}
          label="Rating"
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
