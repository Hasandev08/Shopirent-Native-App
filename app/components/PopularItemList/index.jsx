import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './style'

const PopularItemList = ({ item, element, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.details}>
            <View style={styles.left}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>Rs. {item.price}/-</Text>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PopularItemList
