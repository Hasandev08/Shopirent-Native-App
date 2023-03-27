import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import FavoriteList from '../../components/FavoriteList'

import { styles } from './style'

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([])

  const favoriteList = async () => {
    const result = await AsyncStorage.getItem('favorites')
    if (result !== null) setFavorites(result)
    console.log(favorites)
  }

  useEffect(() => {
    favoriteList()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FavoriteList favorites={favorites} />
      </View>
    </View>
  )
}

export default FavoritesScreen
