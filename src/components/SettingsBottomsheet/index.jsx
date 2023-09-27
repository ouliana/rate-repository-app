import { useState } from 'react';

import { useTheme, Button, Icon, BottomSheet, ListItem } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import LanguageList from './LanguageList';
import ThemeList from './ThemeList';

import { i18n } from '../../utils/i18n';

const Settings = () => {
  const { theme } = useTheme();

  const [visible, setVisible] = useState(false);

  const toggleBottomsheet = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.topButtons}>
      <Button
        type="clear"
        onPress={toggleBottomsheet}
      >
        <Icon
          name="settings-outline"
          type="ionicon"
          color={theme.colors.textPrimary}
        />
      </Button>
      <BottomSheet isVisible={visible}>
        <ListItem
          containerStyle={{ backgroundColor: theme.colors.header }}
          onPress={toggleBottomsheet}
        >
          <ListItem.Content style={{ alignItems: 'flex-end' }}>
            <Text color="textPrimary">{i18n.t('done')}</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: theme.colors.background,
          }}
        >
          <ListItem.Content>
            <LanguageList />
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: theme.colors.background,
          }}
        >
          <ListItem.Content>
            <ThemeList />
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Settings;
