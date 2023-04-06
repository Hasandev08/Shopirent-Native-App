import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

const FavoriteList = ({ favorites = [], renderRightActions, navigation, setProduct }) => {
  return (
    <>
      {favorites.map((item) => (
        <View style={styles.container} key={item.id}>
          <TouchableOpacity onPress={() => navigation.navigate('Product', item)}>
            <Swipeable
              renderRightActions={renderRightActions}
              onSwipeableOpen={() => setProduct(item)}
              onSwipeableClose={() => setProduct([])}
            >
              <View style={styles.upper}>
                <View style={styles.left}>
                  <Image source={item.image} style={styles.image} resizeMode='contain' />
                  <View style={styles.content}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.subContent}>Color: Dark Grey</Text>
                    <Text style={styles.subContent}>Size: {item.size}</Text>
                    <Text style={styles.price}>{item.price}/-</Text>
                  </View>
                </View>
                <View style={styles.right}>
                  <MaterialIcons name='favorite' size={24} color={colors.red} />
                </View>
              </View>
            </Swipeable>
          </TouchableOpacity>
        </View>
      ))}
    </>
  )
}

export default FavoriteList
