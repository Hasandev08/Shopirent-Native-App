import React, { useEffect } from 'react'
import { View } from 'react-native'

import FavoriteList from '../../components/FavoriteList'

import { styles } from './style'

const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FavoriteList />
      </View>
    </View>
  )
}

export default FavoritesScreen
