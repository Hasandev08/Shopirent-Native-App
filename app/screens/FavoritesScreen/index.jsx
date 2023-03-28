import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import FavoriteList from '../../components/FavoriteList'

import { styles } from './style'

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([])

  const favoriteList = async () => {
    const result = await AsyncStorage.getItem('favorites')
    if (result) {
      let temp = JSON.parse(result)
      if (temp.length > 0) setFavorites(() => temp)
    }
  }

  useEffect(() => {
    favoriteList()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.list}>
          <FavoriteList favorites={favorites} />
        </View>
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
