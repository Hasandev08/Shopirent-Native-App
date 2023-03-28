import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import DeleteAction from '../../components/common/DeleteAction.js'
import FavoriteList from '../../components/FavoriteList'

import { styles } from './style'

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([])

  const favoriteList = async () => {
    const result = await AsyncStorage.getItem('favorites')
    if (result) {
      let temp = JSON.parse(result)
      if (temp.length > 0) setFavorites(() => temp)
    }
  }

  const deleteFavorite = async () => {
    const newFavorites = favorites.filter((n) => n.id !== favorites.id)
    console.log(newFavorites)
    setFavorites(newFavorites)
    // await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const displayDeleteAlert = () => {
    Alert.alert(
      'Are you sure?',
      'This action will delete your note permanently!',
      [
        {
          text: 'Delete',
          onPress: deleteFavorite,
        },
        {
          text: 'No Thanks',
          onPress: () => console.log('Thanks'),
        },
      ],
      {
        cancelable: true,
      }
    )
  }

  useEffect(() => {
    favoriteList()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.list}>
          <FavoriteList
            navigation={navigation}
            favorites={favorites}
            renderRightActions={() => <DeleteAction onPress={displayDeleteAlert} />}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
