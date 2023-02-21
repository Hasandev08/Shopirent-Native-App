import React from 'react'
import { Text, View } from 'react-native'

import AppButton from '../../components/common/AppButton'
import CartList from '../../components/CartList'

import { styles } from './style'

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <CartList navigation={navigation} />
      </View>
      <View style={styles.checkOut}>
        <View style={styles.subtotal}>
          <Text style={styles.header}>Subtotal</Text>
          <Text style={styles.price}>100/-</Text>
        </View>
        <AppButton title='CHECK OUT' onPress={() => navigation.navigate('Payment')} />
      </View>
    </View>
  )
}

export default CartScreen
