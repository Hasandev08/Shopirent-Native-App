import React from 'react'

import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './style'

const Categories = ({ categories }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <View key={index.toString()}>
            <View style={styles.container}>
              <Image source={item.icon} />
            </View>
            <Text style={styles.categoryName}>{item.title}</Text>
          </View>
        ))}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Categories
