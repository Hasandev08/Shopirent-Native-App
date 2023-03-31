import React, { useState } from 'react'

import { Image, Text, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { styles } from './style'

const CartList = ({ cart, renderRightActions, setProduct }) => {
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
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.subContent}>Color: Dark Grey</Text>
                <Text style={styles.subContent}>Size: L</Text>
                <Text style={styles.price}>{item.price}/-</Text>
              </View>
            </View>
            <View style={styles.lower}>
              <Text style={styles.quantity}>x{item.quantity}</Text>
            </View>
          </Swipeable>
        </View>
      ))}
    </>
  )
}

export default CartList
