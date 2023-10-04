import { Chip } from '@rneui/themed';
import { i18n } from '../../utils/i18n';
import { useNavigate, useLocation } from 'react-router-native';

const AppBarTab = ({ text, to }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentView = to === location.pathname;

  const onPress = () => navigate(to);

  return (
    <Chip
      title={i18n.t(text)}
      type={isCurrentView ? 'solid' : 'outline'}
      onPress={onPress}
    />
  );
};

export default AppBarTab;
