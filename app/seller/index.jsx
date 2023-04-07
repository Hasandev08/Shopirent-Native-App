import { StyleSheet, View } from 'react-native'

import TabSellerNavigator from './navigation/TabSellerNavigator'

export default function Seller() {
  return (
    <View style={styles.background}>
      <TabSellerNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})
