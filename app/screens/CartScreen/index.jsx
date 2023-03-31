import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import AppButton from '../../components/common/AppButton'
import CartList from '../../components/CartList'
import DeleteAction from '../../components/common/DeleteAction'

import { deleteProduct, handleDeleteAll } from '../../utils/deleteProduct'
import { displayDeleteAlert } from '../../utils/alert'

import { styles } from './style'

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([])
  const [product, setProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const cartList = async () => {
    const result = await AsyncStorage.getItem('cart')
    if (result) {
      let temp = JSON.parse(result)
      if (temp.length > 0) setCart(() => temp)
    }
  }

  const calcTotal = () => {
    let temp = 0
    cart.forEach((item) => {
      temp = temp + item.price
    })
    setTotalPrice(temp)
  }

  useEffect(() => {
    cartList()
  }, [])

  useEffect(() => {
    calcTotal()
  }, [cart])

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
      <ScrollView style={styles.list}>
        {cart.length > 0 && (
          <TouchableWithoutFeedback
            onPress={() =>
              displayDeleteAlert(
                'Are you sure?',
                'This action will delete all your products!',
                'Delete',
                () => handleDeleteAll(setCart, 'cart'),
                'No Thanks'
              )
            }
          >
            <Text style={styles.deleteButton}>(Delete All)</Text>
          </TouchableWithoutFeedback>
        )}
        <CartList
          cart={cart}
          setProduct={setProduct}
          renderRightActions={() => (
            <DeleteAction
              onPress={() =>
                displayDeleteAlert(
                  'Are you sure?',
                  'This action will delete your product!',
                  'Delete',
                  () => deleteProduct(cart, setCart, product, 'cart'),
                  'No Thanks'
                )
              }
            />
          )}
        />
      </ScrollView>
      <View style={styles.checkOut}>
        <View style={styles.subtotal}>
          <Text style={styles.header}>Subtotal</Text>
          <Text style={styles.price}>{totalPrice}/-</Text>
        </View>
        <AppButton title='CHECK OUT' onPress={() => navigation.navigate('Payment')} />
      </View>
    </View>
  )
}

export default CartScreen
