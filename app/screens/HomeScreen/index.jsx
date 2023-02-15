import React from 'react'
import { Text, View } from 'react-native'

import SearchBar from '../../components/SearchBar'

import { styles } from './style'

function HomeScreen(props) {
  return (
    <View style={styles.homeContainer}>
      <SearchBar />
      <Text style={styles.homeHeading}>Category</Text>
    </View>
  )
}

export default HomeScreen
