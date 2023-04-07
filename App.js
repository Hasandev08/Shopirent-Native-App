import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import Customer from './customer'
import Seller from './seller'

import colors from './customer/app/config/colors'

export default function App() {
  return (
    <View style={styles.background}>
      <Seller />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
