import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'

import AppButton from '../../../components/AppButton'
import CounterButton from '../../components/common/CounterButton'
import FavoriteButton from '../../components/common/FavoriteButton'
import SizeButton from '../../components/SizeButton'

import { getAsync } from '../../utils/getItem'
import { handleAddProduct } from '../../utils/addProduct'

import colors from '../../../config/colors'

import { styles } from './style'

const ProductScreen = ({ navigation, route }) => {
  const listing = route.params
  const [cartToggled, setCartToggled] = useState(false)
  const [count, setCount] = useState(1)
  const [size, setSize] = useState('M')
  const [toggled, setToggled] = useState(false)

  let call = async () => {
    let favoriteResult = await getAsync('favorites')
    let cartResult = await getAsync('cart')

    let isFavoritePresent = favoriteResult.filter((item) => item.id === listing.id)
    let isCartPresent = cartResult.filter((item) => item.id === listing.id)

    if (isFavoritePresent.length > 0) {
      setToggled(true)
    }
    if (isCartPresent.length > 0) {
      setCartToggled(true)
    }
  }

  useEffect(() => {
    call()
    return () => call()
  }, [])

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
  }, [])

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
              <FavoriteButton
                handleFavorite={() => handleAddProduct(listing, 'favorites', setToggled, size)}
                toggled={toggled}
              />
            </View>
            <Text style={{ color: colors.primary, fontSize: 24, fontWeight: '500' }}>
              {listing.price}/-
            </Text>
          </View>
        </View>
        <View style={styles.common}>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>Size: </Text>
          <View style={styles.sizeButtons}>
            <SizeButton size={size} setSize={setSize} />
          </View>
        </View>
        <View style={styles.common}>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>Select Quantity: </Text>
          <CounterButton count={count} setCount={setCount} />
        </View>
        <View>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>Description</Text>
          <Text style={styles.desc}>{listing.description}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          {!cartToggled ? (
            <AppButton
              title='ADD TO CART'
              onPress={() => handleAddProduct(listing, 'cart', setCartToggled, size, count)}
            />
          ) : (
            <AppButton title='ADDED TO CART' buttonDisable={true} />
          )}
        </View>
      </View>
    </View>
  )
}

export default ProductScreen
