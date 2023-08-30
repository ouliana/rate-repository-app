import { StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';
import Constants from 'expo-constants';

const getGlobalStyles = props =>
  StyleSheet.create({
    header: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: props.colors.header,
      // ...
    },
    main: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: props.colors.secondary,
    },
    background: {
      backgroundColor: '#ffffff',
    },
    base: {
      padding: 4,
      backgroundColor: props.colors.primary,
      borderRadius: 3,
      flexGrow: 0,
    },
    rating: {
      flexGrow: 0,
      width: 50,
      height: 50,
      borderWidth: 2,
      borderRadius: 25,
      borderColor: props.colors.primary,
    },
    container: {
      backgroundColor: props.colors.secondary,
      color: props.colors.textPrimary,
    },
    text: {
      color: props.colors.textPrimary,
      fontFamily: props.fonts.main,
      fontSize: props.fontSizes.body,
    },
  });

const useGlobalStyles = () => {
  const { theme } = useTheme();

  const styles = getGlobalStyles(theme);
  // const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

  return styles;
};

export default useGlobalStyles;
