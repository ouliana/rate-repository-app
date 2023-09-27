import { View } from 'react-native';

import { Divider } from '@rneui/themed';
import LanguageItem from './LanguageItem';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const LanguageList = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.menuContainer}>
      <LanguageItem
        lan={'English'}
        value={'en'}
      />
      <Divider
        color={globalStyles.colors.divider}
        width={1}
        orientation="horizontal"
        style={{ width: '100%' }}
      />
      <LanguageItem
        lan={'Русский'}
        value={'ru'}
      />
    </View>
  );
};

export default LanguageList;
