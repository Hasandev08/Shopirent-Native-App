import React from 'react'

import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './style'

const Categories = ({ categories, navigation }) => {
  return (
    <View style={styles.categories}>
      {categories.map((item, index) => (
        <View key={index.toString()}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('CategoryScreen', item)}>
            <View>
              <View style={styles.container}>
                <Image source={item.image} />
              </View>
              <Text style={styles.categoryName}>{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      ))}
    </View>
  )
}

export default Categories
