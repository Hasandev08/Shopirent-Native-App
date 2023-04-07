import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import DeleteAction from '../../components/common/DeleteAction'
import FavoriteList from '../../components/FavoriteList'

import { deleteProduct, handleDeleteAll } from '../../utils/deleteProduct'
import { displayAlert } from '../../utils/alert.js'

import { styles } from './style'

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([])
  const [product, setProduct] = useState([])

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
        {favorites.length > 0 && (
          <TouchableWithoutFeedback
            onPress={() =>
              displayAlert(
                'Are you sure?',
                'This action will delete all your products!',
                'Delete',
                () => handleDeleteAll(setFavorites, 'favorites'),
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
                  displayAlert(
                    'Are you sure?',
                    'This action will delete your product!',
                    'Delete',
                    () => deleteProduct(favorites, setFavorites, product, 'favorites'),
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
