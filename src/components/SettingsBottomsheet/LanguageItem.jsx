import { useContext } from 'react';

import { Pressable } from 'react-native';
import { useTheme, Icon } from '@rneui/themed';
import Text from '../Text';

import LocaleContext from '../../contexts/LocaleContext';
import { changeLocale } from '../../utils/i18n';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const LanguageItem = ({ lan, value }) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();

  const [locale, dispatch] = useContext(LocaleContext);

  const changeLanguage = language => {
    dispatch({
      type: 'SET',
      payload: language,
    });
    changeLocale(language);
  };

  return (
    <Pressable
      onPress={() => changeLanguage(value)}
      style={globalStyles.menuItem}
    >
      <Text color="textPrimary">{lan}</Text>
      <Icon
        name="checkmark-outline"
        type="ionicon"
        color={
          locale.slice(0, 2) === value.slice(0, 2)
            ? theme.colors.textPrimary
            : theme.colors.backgroundCard
        }
      />
    </Pressable>
  );
};

export default LanguageItem;
