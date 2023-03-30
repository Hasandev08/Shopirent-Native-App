import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import AppButton from '../../components/common/AppButton'
import CartList from '../../components/CartList'

import { styles } from './style'

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([])

  const cartList = async () => {
    const result = await AsyncStorage.getItem('cart')
    if (result) {
      let temp = JSON.parse(result)
      if (temp.length > 0) setCart(() => temp)
    }
  }

  useEffect(() => {
    cartList()
  }, [])

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      })
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <CartList cart={cart} />
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
