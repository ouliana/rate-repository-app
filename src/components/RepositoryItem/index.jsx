import { View, StyleSheet, Image } from 'react-native';
import CountsItem from './CountsItem';
import Text from '../Text';

import * as Linking from 'expo-linking';

import { i18n } from '../../utils/i18n';

import { useTheme, Button, Chip } from '@rneui/themed';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { useLocaleValue } from '../../contexts/LocaleContext';

const RepositoryItem = ({ item, isSingle }) => {
  useLocaleValue();
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
          <Chip
            title={item.language}
            buttonStyle={{ backgroundColor: theme.colors.chip }}
            titleStyle={{
              color: theme.colors.textPrimary,
            }}
          />
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
          buttonStyle={globalStyles.primaryButton}
          titleStyle={globalStyles.buttonTitle}
          onPress={() => {
            Linking.openURL(item.url);
          }}
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
});

export default RepositoryItem;
