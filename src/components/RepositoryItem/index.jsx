import { View, StyleSheet, Image } from 'react-native';
import CountsItem from './CountsItem';
import Text from '../Text';

import * as Linking from 'expo-linking';

// import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';

import { useTheme, Button } from '@rneui/themed';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const RepositoryItem = ({ item, isSingle }) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();

  if (!item) return null;

  return (
    <View
      style={{
        backgroundColor: theme.colors.backgroundCard,
        ...styles.container,
      }}
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
          <Text
            color="textPrimary"
            fontWeight="bold"
          >
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <View
            style={{ backgroundColor: theme.colors.primary, ...styles.chip }}
          >
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
          title={i18n.t('openInGitHub')}
          titleStyle={{
            fontSize: theme.fontSizes.body,
            color: theme.colors.white,
          }}
          onPress={() => {
            Linking.openURL(item.url);
          }}
          containerStyle={globalStyles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
  chip: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
  },
});

export default RepositoryItem;
