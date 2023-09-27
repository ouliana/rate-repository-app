import React, { useState, useContext } from 'react';
import { useTheme, BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import OrderContext from '../../contexts/OrderContext';

import { Picker } from '@react-native-picker/picker';
import { orderPrinciples, orderValues } from '../../utils/sorting';

import Text from '../Text';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { i18n } from '../../utils/i18n';

const OrderPickerBottomsheet = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();

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

  return (
    <SafeAreaProvider>
      <Button
        title={i18n.t(orderPrinciples[order].label)}
        onPress={() => setIsVisible(true)}
        buttonStyle={{ backgroundColor: theme.colors.background }}
        titleStyle={globalStyles.text}
        icon={{
          name: 'chevron-down',
          type: 'ionicon',
          color: theme.colors.textPrimary,
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
      />
      <BottomSheet isVisible={isVisible}>
        <ListItem
          containerStyle={{ backgroundColor: theme.colors.primary }}
          onPress={handleOnPress}
        >
          <ListItem.Content style={{ alignItems: 'flex-end' }}>
            <Text color="textBackground">{i18n.t('done')}</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ background: theme.colors.background }}>
          <ListItem.Content>
            <View style={styles.picker}>
              <Picker
                selectedValue={option}
                onValueChange={value => setOption(value)}
                itemStyle={{
                  backgroundColor: theme.colors.backgroundContainer,
                  borderRadius: 12,
                }}
              >
                {orderValues.map(value => (
                  <Picker.Item
                    key={orderPrinciples[value].label}
                    label={i18n.t(orderPrinciples[value].label)}
                    value={value}
                    color={theme.colors.textPrimary}
                    fontSize="8"
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
