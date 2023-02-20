import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import FavoriteButton from '../common/FavoriteButton'

import { styles } from './style'

const PopularItemList = ({ title, image, price, rating, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.details}>
          <View style={styles.left}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>Rs. {price}/-</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <View style={styles.right}>
            <FavoriteButton />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PopularItemList
