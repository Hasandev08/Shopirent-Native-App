import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import DeleteAction from '../../components/common/DeleteAction.js'
import FavoriteList from '../../components/FavoriteList'

import { displayDeleteAlert } from '../../utils/alert.js'

import { styles } from './style'

const FavoritesScreen = ({ navigation }) => {
  const [product, setProduct] = useState([])
  const [favorites, setFavorites] = useState([])

  const favoriteList = async () => {
    const result = await AsyncStorage.getItem('favorites')
    if (result) {
      let temp = JSON.parse(result)
      if (temp.length > 0) setFavorites(() => temp)
    }
  }

  const deleteFavorite = async () => {
    const newFavorites = favorites.filter((n) => n.id !== product.id)
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const handleDeleteAll = async () => {
    await AsyncStorage.removeItem('favorites')
    setFavorites([])
  }

  useEffect(() => {
    favoriteList()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {favorites.length > 0 && (
          <TouchableWithoutFeedback
            onPress={() =>
              displayDeleteAlert(
                'Are you sure?',
                'This action will delete all your products!',
                'Delete',
                handleDeleteAll,
                'No Thanks'
              )
            }
          >
            <Text style={styles.deleteButton}>(Delete All)</Text>
          </TouchableWithoutFeedback>
        )}
        <View style={styles.list}>
          <FavoriteList
            navigation={navigation}
            favorites={favorites}
            setProduct={setProduct}
            renderRightActions={() => (
              <DeleteAction
                onPress={() =>
                  displayDeleteAlert(
                    'Are you sure?',
                    'This action will delete your product!',
                    'Delete',
                    deleteFavorite,
                    'No Thanks'
                  )
                }
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
