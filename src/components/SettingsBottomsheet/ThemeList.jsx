import { View } from 'react-native';

import { Divider } from '@rneui/themed';
import ThemeItem from './ThemeItem';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const ThemeList = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.menuContainer}>
      <ThemeItem value="light" />
      <Divider
        color={globalStyles.colors.divider}
        width={1}
        orientation="horizontal"
        style={{ width: '100%' }}
      />
      <ThemeItem value="dark" />
    </View>
  );
};

export default ThemeList;
