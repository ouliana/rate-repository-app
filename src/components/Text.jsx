import { Text as NativeText } from 'react-native';

import { useTheme } from '@rneui/themed';

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const { theme } = useTheme();

  const textStyle = [
    { fontSize: theme.fontSizes.body },
    { fontFamily: theme.fonts.main },
    color === 'textPrimary' && { color: theme.colors.textPrimary },
    color === 'textSecondary' && { color: theme.colors.textSecondary },
    color === 'primary' && { color: theme.colors.primary },
    color === 'textBackground' && { color: theme.colors.white },
    color === 'error' && { color: theme.colors.error },
    fontSize === 'subheading' && {
      fontSize: theme.fontSizes.subheading,
    },
    fontWeight === 'bold' && { fontWeight: theme.fontWeights.bold },
    style,
  ];

  return (
    <NativeText
      style={textStyle}
      {...props}
    />
  );
};

export default Text;
