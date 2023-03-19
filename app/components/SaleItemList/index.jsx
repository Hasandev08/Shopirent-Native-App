import React from 'react'

import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './style'

const SaleItemList = ({ title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.card}>
          <View style={styles.upper}>
            <Image style={styles.cardImage} source={image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.itemName}>{title}</Text>
            <Text style={styles.itemPrice}>Rs. 1000/-</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SaleItemList
