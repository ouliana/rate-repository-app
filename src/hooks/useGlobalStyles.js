import { useTheme } from '@rneui/themed';
import { getGlobalStyles } from '../globalStyles';

const useGlobalStyles = () => {
  const { theme } = useTheme();

  const styles = getGlobalStyles(theme);
  // const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

  return styles;
};

export default useGlobalStyles;
