import { Alert } from 'react-native';
import { i18n } from '../../utils/i18n';

const ConfirmDelete = ({ repository, setIsConfirmed }) =>
  Alert.alert(
    i18n.t('alertDeleteReviewTitle'),
    `${i18n.t('alertDeleteReviewQuestion')} ${repository}?`,
    [
      {
        text: i18n.t('cancel'),
        onPress: () => setIsConfirmed(false),
        style: 'cancel',
      },
      {
        text: i18n.t('delete'),
        onPress: () => setIsConfirmed(true),
      },
    ]
  );

export default ConfirmDelete;
