import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './style'

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Payment Method</Text>
      </View>
      <View></View>
    </View>
  )
}

export default PaymentMethod
