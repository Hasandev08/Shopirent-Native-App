import React from 'react'

import { Text, TouchableWithoutFeedback, View } from 'react-native'

import { categories } from '../../config/categories'
import { styles } from './style'

const Categories = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <View key={index.toString()}>
            <View style={styles.container}></View>
            <Text style={styles.categoryName}>{item.title}</Text>
          </View>
        ))}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Categories
