import { useState } from 'react';
import { Button, Icon, useTheme } from '@rneui/themed';
import OrderPicker from './OrderPicker';

import { useOrderValue } from '../../contexts/OrderContext';

import { View, StyleSheet, Pressable, Modal } from 'react-native';
import Text from '../Text';

const OrderPickerModal = () => {
  const { theme } = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const order = useOrderValue();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    picker: {
      flexGrow: 0,
      backgroundColor: '#ffffff',
      width: '100%',
    },
    backDrop: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: '#00000066',
    },
    top: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.primary,
    },
    topText: {
      flex: 1,
      flexGrow: 1,
      justifyContent: 'center',
      paddingLeft: 16,
    },
  });

  return (
    <>
      <View style={styles.top}>
        <View style={styles.topText}>
          <Text
            color="textBackground"
            fontWeight="bold"
          >
            {order}
          </Text>
        </View>
        <Button
          onPress={() => setIsVisible(true)}
          // buttonStyle={styles.button}
        >
          <Icon
            name="sort"
            type="font-awesome"
            color="#ffffff"
          />
        </Button>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.container}>
          <Pressable
            onPress={() => setIsVisible(false)}
            style={styles.backDrop}
          ></Pressable>

          <View style={styles.picker}>
            <OrderPicker
              isModal={true}
              setIsVisible={setIsVisible}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default OrderPickerModal;
