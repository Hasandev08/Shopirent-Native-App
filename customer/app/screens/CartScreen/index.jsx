import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import CartList from '../../components/CartList'
import DeleteAction from '../../components/common/DeleteAction'

import { deleteProduct, handleDeleteAll } from '../../utils/deleteProduct'
import { displayAlert } from '../../utils/alert'

import { styles } from './style'

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([])
  const [product, setProduct] = useState([])

  const cartList = async () => {
    const result = await AsyncStorage.getItem('cart')

    if (result) {
      let temp = JSON.parse(result)
      if (temp.length > 0) setCart(() => temp)
    }
  }

  const calcSubTotal = () => {
    cart.forEach((item) => {
      let temp = item.price * item.quantity
      item.subTotal = temp
    })
  }

  useEffect(() => {
    cartList()
  }, [])

  useEffect(() => {
    calcSubTotal()
  })

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
              displayAlert(
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
                displayAlert(
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
    </View>
  )
}

export default CartScreen
