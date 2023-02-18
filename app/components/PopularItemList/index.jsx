import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import FavoriteButton from '../FavoriteButton'

import { styles } from './style'

const PopularItemList = ({ title, image, price, rating }) => {
  return (
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
          <TouchableOpacity>
            <View style={styles.buttonOutline}>
              <Text style={styles.cartButton}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PopularItemList
