import { Platform } from 'react-native';

const themeValues = {
  lightColors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    secondary: '#e5e7eb',
    header: '#24292e',
    // background: '#e1e4e8',
    backgroundText: '#ffffff',
    error: '#e11d48',
  },
  darkColors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    secondary: '#e5e7eb',
    header: '#24292e',
    // background: '#e1e4e8',
    backgroundText: '#ffffff',
    error: '#e11d48',
  },
  mode: 'light' | 'dark',
  fontSizes: {
    body: 16,
    subheading: 18,
    heading: 24,
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
