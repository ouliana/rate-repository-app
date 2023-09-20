import { Platform } from 'react-native';

const themeValues = {
  lightColors: {
    textPrimary: '#24292e',
    textSecondary: '#5e6977',
    // primary: '#0366d6',
    // secondary: '#D1D5DB',
    header: '#24292e',
    // backgroundText: '#ffffff',
    backgroundContainer: 'white',
    backgroundCard: 'white',
    // error: '#be123c',
    background: '#e1e8ee',
    divider: '#bdc6cf',
  },
  darkColors: {
    textPrimary: '#E4E4E7',
    textSecondary: '#86939e',
    // primary: '#3B82F6',
    // secondary: '#27272A',
    header: '#24292e',
    // backgroundText: '#000000',
    backgroundContainer: '#43484d',
    backgroundCard: '#393e42',
    // background: '#27272A',
    error: '#F87171',
    // error: '#e11d48',
    background: '#242424',
    divider: '#86939e',
    // divider: '#e5e7eb',
  },
  mode: 'light' | 'dark',
  fontSizes: {
    body: 16,
    subheading: 24,
    heading: 28,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 12,
    width: '100%',
  },
};

export default themeValues;
