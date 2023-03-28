import React from 'react'

import { Image, Text, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

const FavoriteList = ({ favorites = [] }) => {
  return (
    <>
      {favorites.map((item) => (
        <View style={styles.container} key={item.id}>
          <View style={styles.upper}>
            <View style={styles.left}>
              <Image source={item.image} style={styles.image} resizeMode='contain' />
              <View style={styles.content}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.subContent}>Color: Dark Grey</Text>
                <Text style={styles.subContent}>Size: L</Text>
                <Text style={styles.price}>{item.price}/-</Text>
              </View>
            </View>
            <View style={styles.right}>
              <MaterialIcons name='favorite' size={24} color={colors.red} />
            </View>
          </View>
        </View>
      ))}
    </>
  )
}

export default FavoriteList
