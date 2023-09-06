import { Alert } from 'react-native';

const ConfirmDelete = ({ repository, setIsConfirmed }) =>
  Alert.alert(
    'Delete Review',
    `Are you sure you want to delete review on repository ${repository}?`,
    [
      {
        text: 'Cancel',
        onPress: () => setIsConfirmed(false),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => setIsConfirmed(true),
      },
    ]
  );

export default ConfirmDelete;
