import { StyleSheet, View } from 'react-native'

import ReturnScreen from './screens/ReturnScreen'

export default function Seller() {
  return (
    <View style={styles.background}>
      <ReturnScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})
