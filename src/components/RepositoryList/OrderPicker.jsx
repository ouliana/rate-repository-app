import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';

import { Picker } from '@react-native-picker/picker';
import { orderValues } from '../../utils/sorting';

const OrderPicker = ({ isModal, setIsVisible }) => {
  const [order, dispatch] = useContext(OrderContext);

  const handleOnValueChange = option => {
    if (isModal) {
      setIsVisible(false);
    }
    dispatch({
      type: 'SET',
      payload: option,
    });
  };
  let key = 0;
  return (
    <Picker
      selectedValue={order}
      onValueChange={option => handleOnValueChange(option)}
    >
      {orderValues.map(value => (
        <Picker.Item
          key={key++}
          label={value}
          value={value}
        />
      ))}
    </Picker>
  );
};

export default OrderPicker;
