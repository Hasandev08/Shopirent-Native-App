import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import AppButton from '../../components/common/AppButton'
import CounterButton from '../../components/common/CounterButton'
import FavoriteButton from '../../components/common/FavoriteButton'
import SizeButton from '../../components/SizeButton'

import colors from '../../config/colors'
import { styles } from './style'

const ProductScreen = ({ navigation, route }) => {
  const listing = route.params
  const [toggled, setToggled] = useState(false)
  const [favorites, setFavorites] = useState([])

  const handleFavorite = async (listing) => {
    try {
      const updatedFavorites = [...favorites, listing]
      setFavorites(updatedFavorites)
      setToggled(true)
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      })
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <ImageBackground resizeMode='contain' source={listing.image} style={styles.productImage} />
      </View>
      <View style={styles.lower}>
        <View style={styles.common}>
          <View style={styles.headerLeft}>
            <Text style={{ color: colors.primary, fontSize: 18, fontWeight: '500' }}>
              {listing.title}
            </Text>
            <Text style={{ color: colors.secondary, fontSize: 14 }}>{listing.rating}</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.favorite}>
              <FavoriteButton handleFavorite={() => handleFavorite(listing)} toggled={toggled} />
            </View>
            <Text style={{ color: colors.primary, fontSize: 24, fontWeight: '500' }}>
              {listing.price}/-
            </Text>
          </View>
        </View>
        <View style={styles.common}>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>Size: </Text>
          <View style={styles.sizeButtons}>
            <SizeButton />
          </View>
        </View>
        <View style={styles.common}>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>Select Quantity: </Text>
          <CounterButton />
        </View>
        <View>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>Description</Text>
          <Text style={styles.desc}>{listing.description}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <AppButton title='ADD TO CART' />
        </View>
      </View>
    </View>
  )
}

export default ProductScreen
