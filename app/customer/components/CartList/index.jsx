import React from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { styles } from './style'
import colors from '../../../config/colors'

const CartList = ({ cart, renderRightActions, setProduct, navigation }) => {
  return (
    <>
      {cart.map((item) => (
        <View style={styles.container} key={item.id}>
          <Swipeable
            renderRightActions={renderRightActions}
            onSwipeableOpen={() => setProduct(item)}
            onSwipeableClose={() => setProduct([])}
          >
            <View style={styles.upper}>
              <Image source={item.image} style={styles.image} resizeMode='contain' />
              <View style={styles.content}>
                <View style={styles.upperContent}>
                  <View style={styles.details}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.subContent}>Color: Dark Grey</Text>
                    <Text style={styles.subContent}>Size: {item.size}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.checkout}
                    onPress={() => navigation.navigate('Payment', item)}
                  >
                    <View style={styles.checkoutButton}>
                      <Text style={{ color: colors.white, fontSize: 12 }}>Checkout</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                  <Text style={styles.price}>{item.price}/-</Text>
                  <Text style={styles.quantity}>x{item.quantity}</Text>
                </View>
              </View>
            </View>
            <View style={styles.lower}>
              <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Sub Total:</Text>
              <Text style={{ color: colors.red, fontWeight: 'bold' }}>{item.subTotal}/-</Text>
            </View>
          </Swipeable>
        </View>
      ))}
    </>
  )
}

export default CartList
