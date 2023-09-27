import { Pressable, View, StyleSheet } from 'react-native';
import { useTheme, useThemeMode, Icon } from '@rneui/themed';
import Text from '../Text';
import { i18n } from '../../utils/i18n';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeItem = ({ value }) => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const globalStyles = useGlobalStyles();

  const iconName = value === 'light' ? 'sunny-outline' : 'moon-outline';
  const themeName = value === 'light' ? 'themeLight' : 'themeDark';

  const onPress = () => {
    (async () => {
      try {
        await AsyncStorage.setItem('mode', value);
      } catch (e) {
        throw new Error(i18n.t('otherErrorMessage'));
      }
    })();
    setMode(value);
  };

  return (
    <Pressable
      onPress={() => onPress()}
      style={globalStyles.menuItem}
    >
      <View style={styles.group}>
        <Icon
          name={iconName}
          type="ionicon"
        />
        <Text color="textPrimary">{i18n.t(themeName)}</Text>
      </View>
      <Icon
        name="checkmark-outline"
        type="ionicon"
        color={
          value === mode
            ? theme.colors.textPrimary
            : theme.colors.backgroundContainer
        }
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  group: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
});

export default ThemeItem;
