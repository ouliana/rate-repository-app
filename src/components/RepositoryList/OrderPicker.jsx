import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';

import { Picker } from '@react-native-picker/picker';
import { orderPrinciples, orderValues } from '../../utils/sorting';

import { i18n } from '../../utils/i18n';

const OrderPicker = () => {
  const [order, dispatch] = useContext(OrderContext);

  const handleOnValueChange = option => {
    dispatch({
      type: 'SET',
      payload: option,
    });
  };

  return (
    <Picker
      selectedValue={order}
      onValueChange={option => handleOnValueChange(option)}
    >
      {orderValues.map(value => (
        <Picker.Item
          key={orderPrinciples[value].label}
          label={i18n.t(orderPrinciples[value].label)}
          value={value}
        />
      ))}
    </Picker>
  );
};

export default OrderPicker;
