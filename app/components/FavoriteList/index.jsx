import React from 'react'

import { Text, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

const CartList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.left}>
          <View style={styles.image}></View>
          <View style={styles.content}>
            <Text style={styles.name}>Levi's Jeans</Text>
            <Text style={styles.subContent}>Color: Dark Grey</Text>
            <Text style={styles.subContent}>Size: L</Text>
            <Text style={styles.price}>1500/-</Text>
          </View>
        </View>
        <View style={styles.right}>
          <MaterialIcons name='favorite' size={24} color={colors.red} />
        </View>
      </View>
    </View>
  )
}

export default CartList
