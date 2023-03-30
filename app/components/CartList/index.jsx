import React from 'react'

import { Image, Text, View } from 'react-native'

import { styles } from './style'

const CartList = ({ cart }) => {
  return (
    <>
      {cart.map((item) => (
        <View style={styles.container} key={item.id}>
          <View style={styles.upper}>
            <Image source={item.image} style={styles.image} resizeMode='contain' />
            <View style={styles.content}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.subContent}>Color: Dark Grey</Text>
              <Text style={styles.subContent}>Size: L</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  )
}

export default CartList
