import { Platform } from 'react-native';

const themeValues = {
  lightColors: {
    textPrimary: '#374151',
    textSecondary: '#5e6977',
    header: '#F9FAFB',
    background: '#E5E7EB',
    backgroundContainer: 'white',
    backgroundCard: 'white',
    backgroundHeader: '#F1F5F9',
    error: '#E11D48',
    divider: '#D1D5DB',
  },
  darkColors: {
    textPrimary: '#F3F4F6',
    textSecondary: '#9CA3AF',
    header: '#111827',
    background: '#1F2937',
    backgroundContainer: '#1F2937',
    backgroundCard: '#374151',
    backgroundHeader: '#0F172A',
    error: '#F87171',
    divider: '#86939e',
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
