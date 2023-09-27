import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const getGlobalStyles = props =>
  StyleSheet.create({
    header: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: props.colors.backgroundHeader,
      borderBottomWidth: 1,
      borderBottomColor: props.colors.divider,
    },
    main: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: props.colors.background,
      color: props.colors.textPrimary,
    },
    rating: {
      flexGrow: 0,
      width: 50,
      height: 50,
      borderWidth: 2,
      borderRadius: 25,
      borderColor: props.colors.primary,
    },
    search: {
      backgroundColor: props.colors.backgroundCard,
    },
    container: {
      backgroundColor: props.colors.backgroundCard,
      color: props.colors.textPrimary,
    },
    text: {
      color: props.colors.textPrimary,
      fontFamily: props.fonts.main,
      fontSize: props.fontSizes.body,
    },
    primaryButton: {
      borderRadius: 25,
      paddingVertical: 12,
      backgroundColor: props.colors.primary,
      borderWidth: 1,
      borderColor: props.colors.primary,
    },
    dangerButtonTitle: {
      color: props.colors.error,
      fontSize: props.fontSizes.body,
    },
    buttonPrimaryOutline: {
      borderRadius: 25,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: props.colors.primary,
    },
    buttonDangerOutline: {
      borderRadius: 25,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: props.colors.error,
      color: props.colors.error,
    },
    formContainer: {
      paddingHorizontal: 8,
      paddingVertical: 24,
      height: '100%',
      backgroundColor: props.colors.backgroundContainer,
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderWidth: 1,
      borderColor: props.colors.divider,
      borderRadius: 12,
      width: '100%',
      backgroundColor: props.colors.backgroundContainer,
    },
    colors: {
      backgroundContainer: props.colors.backgroundContainer,
      divider: props.colors.divider,
    },
    menuItem: {
      padding: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    separator: {
      height: 10,
      backgroundColor: props.colors.background,
    },
    buttonTitle: {
      fontSize: props.fontSizes.body,
    },
  });
