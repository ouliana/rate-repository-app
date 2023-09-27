import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';

import { Picker } from '@react-native-picker/picker';
import { orderPrinciples, orderValues } from '../../utils/sorting';

import { useTheme, useThemeMode } from '@rneui/themed';
import { i18n } from '../../utils/i18n';

const OrderPicker = () => {
  const { theme } = useTheme();
  const { mode } = useThemeMode();

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
      dropdownIconColor={theme.colors.textPrimary}
    >
      {orderValues.map(value => (
        <Picker.Item
          key={orderPrinciples[value].label}
          label={i18n.t(orderPrinciples[value].label)}
          value={value}
          color={theme.colors.textPrimary}
          style={
            mode === 'light' ? {} : { backgroundColor: theme.colors.background }
          }
        />
      ))}
    </Picker>
  );
};

export default OrderPicker;
