import React from 'react'

import { Image, Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { styles } from './style'

const OrderList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        {/* <Image source={item.image} style={styles.image} resizeMode='contain' /> */}
        <View style={styles.image}></View>
        <View style={styles.content}>
          <Text style={styles.name}>Bridal Dress</Text>
          <Text style={styles.subContent}>Color: Dark Grey</Text>
          <Text style={styles.subContent}>Size: L</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>1000/-</Text>
            <Text style={styles.quantity}>x2</Text>
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        <Entypo name='back-in-time' size={18} color='rgb(253, 218, 13)' />
        <Text style={styles.pending}>Pending</Text>
      </View>
    </View>
  )
}

export default OrderList
