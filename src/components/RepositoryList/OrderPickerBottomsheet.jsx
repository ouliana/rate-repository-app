import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';

import { Picker } from '@react-native-picker/picker';
import { orderValues } from '../../utils/sorting';

import Text from '../Text';
import useGlobalStyles from '../../hooks/useGlobalStyles';

const OrderPickerBottomsheet = () => {
  const globalStyles = useGlobalStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [order, dispatch] = useContext(OrderContext);
  const [option, setOption] = useState(order);

  const handleOnPress = () => {
    dispatch({
      type: 'SET',
      payload: option,
    });
    setIsVisible(false);
  };

  let key = 0;
  return (
    <SafeAreaProvider>
      <Button
        title={order}
        onPress={() => setIsVisible(true)}
        buttonStyle={globalStyles.container}
        titleStyle={globalStyles.text}
        icon={{
          name: 'chevron-down',
          type: 'font-awesome',
          size: 15,
          // color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
      />
      <BottomSheet isVisible={isVisible}>
        <ListItem
          containerStyle={globalStyles.container}
          onPress={handleOnPress}
        >
          <ListItem.Content style={{ alignItems: 'flex-end' }}>
            <Text
              fontSize="subheading"
              color="primary"
            >
              Done
            </Text>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={globalStyles.background}>
          <ListItem.Content>
            <View style={styles.picker}>
              <Picker
                selectedValue={option}
                onValueChange={value => setOption(value)}
              >
                {orderValues.map(value => (
                  <Picker.Item
                    key={key++}
                    label={value}
                    value={value}
                  />
                ))}
              </Picker>
            </View>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: '100%',
  },
});

export default OrderPickerBottomsheet;
