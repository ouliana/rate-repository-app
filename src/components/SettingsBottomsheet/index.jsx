import { useState } from 'react';

import { useTheme, Button, Icon, BottomSheet, ListItem } from '@rneui/themed';
import { View } from 'react-native';
// import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import LanguageList from './LanguageList';
import ThemeList from './ThemeList';

import { i18n } from '../../utils/i18n';

const SettingsBottomsheet = () => {
  const { theme } = useTheme();

  const [visible, setVisible] = useState(false);

  const toggleBottomsheet = () => {
    setVisible(!visible);
  };

  return (
    <View>
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
            <Text color="primary">{i18n.t('done')}</Text>
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

export default SettingsBottomsheet;
