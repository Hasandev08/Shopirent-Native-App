import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './style'

const PaymentMethod = ({ subTotal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Payment</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.bar}>
          <Text style={{ color: 'rgb(87, 99, 111)' }}>Subtotal for products</Text>
          <Text style={{ color: 'rgb(87, 99, 111)' }}>{subTotal}</Text>
        </View>
        <View style={styles.bar}>
          <Text style={{ color: 'rgb(87, 99, 111)' }}>Subtotal for shipping</Text>
          <Text style={{ color: 'rgb(87, 99, 111)' }}>300</Text>
        </View>
      </View>
    </View>
  )
}

export default PaymentMethod
