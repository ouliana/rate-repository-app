import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const getGlobalStyles = props =>
  StyleSheet.create({
    header: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: props.colors.backgroundContainer,
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
      borderRadius: 5,
    },
    dangerButton: {
      backgroundColor: props.colors.error,
      borderRadius: 5,
    },
    formContainer: {
      padding: 16,
      margin: 16,
      paddingTop: 24,
      backgroundColor: props.colors.backgroundContainer,
      borderWidth: 1,
      borderColor: props.colors.divider,
      borderRadius: 12,
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
      //   primary: props.colors.primary,
      //   secondary: props.colors.secondary,
      //   background: props.colors.background,
      backgroundContainer: props.colors.backgroundContainer,
      //   backgroundMenu: props.colors.backgroundMenu,
      divider: props.colors.divider,
    },
    // fontSizes: {
    //   body: props.fontSizes.body,
    // },
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
    button: {
      borderRadius: 5,
      color: props.colors.textBackground,
    },
    buttonTitle: {
      fontSize: props.fontSizes.body,
      color: props.colors.textPrimary,
    },
  });
