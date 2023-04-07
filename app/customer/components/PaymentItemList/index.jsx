import React from 'react'
import { Text, View } from 'react-native'

import colors from '../../../config/colors'

import { styles } from './style'

const PaymentItemList = ({ name, color, size, price, quantity }) => {
  return (
    <View style={styles.listBackground}>
      <View style={styles.image}></View>
      <View style={styles.content}>
        <Text style={styles.primary}>{name}</Text>
        <View style={styles.subContent}>
          <Text style={{ color: colors.secondary }}>Color: {color} | </Text>
          <Text style={{ color: colors.secondary }}>Size: {size}</Text>
        </View>
        <View style={styles.contentFooter}>
          <Text style={styles.primary}>{price}</Text>
          <Text style={{ color: colors.secondary }}>x{quantity}</Text>
        </View>
      </View>
    </View>
  )
}

export default PaymentItemList
