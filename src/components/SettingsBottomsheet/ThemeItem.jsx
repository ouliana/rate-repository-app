import { Pressable, View, StyleSheet } from 'react-native';
import { useTheme, useThemeMode, Icon } from '@rneui/themed';
import Text from '../Text';
import { i18n } from '../../utils/i18n';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const ThemeItem = ({ value }) => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const globalStyles = useGlobalStyles();

  const iconName = value === 'light' ? 'sunny-outline' : 'moon-outline';
  const themeName = value === 'light' ? 'themeLight' : 'themeDark';

  return (
    <Pressable
      onPress={() => setMode(value)}
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
