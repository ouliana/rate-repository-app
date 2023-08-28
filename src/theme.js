import { Platform } from 'react-native';

const themeValues = {
  lightColors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    background: '#24292e',
    backgroundText: '#ffffff',
    error: '#e11d48',
  },
  darkColors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    background: '#24292e',
    backgroundText: '#ffffff',
    error: '#e11d48',
  },
  mode: 'light' | 'dark',
  fontSizes: {
    body: 16,
    subheading: 18,
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
};

export default themeValues;
