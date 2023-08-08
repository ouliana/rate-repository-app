import { View, StyleSheet } from 'react-native';
import { Link,  } from "react-router-native";

import Text from '../Text'

const styles = StyleSheet.create({
  tab: {
    paddingRight: 16
  }
})

const AppBarTab = ({ text, to }) => {
  return (
      <View style={styles.tab}>
        <Link to={to} >
          <Text color="textBackground" fontWeight="bold">{text}</Text>
        </Link>
      </View>
  )
}

export default AppBarTab;