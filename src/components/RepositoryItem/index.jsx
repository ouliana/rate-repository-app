import { View, StyleSheet, Image } from 'react-native';
import CountsItem from './CountsItem';
import Text from '../Text';

import * as Linking from 'expo-linking';

import { useTheme, Button } from '@rneui/themed';

const RepositoryItem = ({ item, isSingle }) => {
  const { theme } = useTheme();

  if (!item) return null;

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 16,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexGrow: 1,
      flexShrink: 1,
      gap: 8,
    },
    language: {
      padding: 4,
      marginTop: 4,
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
      flexGrow: 0,
    },
    counts: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
  });

  return (
    <View
      style={styles.container}
      testID="repositoryItem"
    >
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
      {isSingle && (
        <Button
          title="Open in GitHub"
          onPress={() => {
            Linking.openURL(item.url);
          }}
        />
      )}
    </View>
  );
};

export default RepositoryItem;
