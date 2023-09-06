import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const getGlobalStyles = props =>
  StyleSheet.create({
    header: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: props.colors.header,
    },
    main: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: props.colors.secondary,
      color: props.colors.textPrimary,
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
    top: {
      backgroundColor: props.colors.secondary,
    },
    search: {
      backgroundColor: props.colors.backgroundContainer,
    },
    container: {
      backgroundColor: props.colors.backgroundContainer,
      color: props.colors.textPrimary,
    },
    text: {
      color: props.colors.textPrimary,
      fontFamily: props.fonts.main,
      fontSize: props.fontSizes.body,
    },
    primaryButton: {
      backgroundColor: props.colors.primary,
    },
    dangerButton: {
      backgroundColor: props.colors.error,
    },
    formContainer: {
      padding: 16,
      margin: 16,
      paddingTop: 24,
      borderRadius: 4,
      backgroundColor: props.colors.background,
    },
  });
