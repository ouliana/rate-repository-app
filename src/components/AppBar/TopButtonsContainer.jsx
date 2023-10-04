import { View, StyleSheet } from 'react-native';
import SettingsBottomsheet from '../SettingsBottomsheet';
import { useTheme, Icon } from '@rneui/themed';
import Text from '../Text';

const TopButtonsContainer = ({ currentUser, handleSignOut }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.topButtons}>
      {currentUser && (
        <View style={styles.topButtons}>
          <Icon
            name="person-circle-outline"
            type="ionicon"
            color={theme.colors.textPrimary}
          />
          <Text color="textPrimary">{currentUser}</Text>
        </View>
      )}
      <SettingsBottomsheet />
      {currentUser && (
        <View style={styles.topButtons}>
          <Icon
            name="exit-outline"
            type="ionicon"
            color={theme.colors.textPrimary}
            onPress={() => handleSignOut()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default TopButtonsContainer;
