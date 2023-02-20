import React, { useEffect } from 'react'
import { ImageBackground, Text, View } from 'react-native'

import AppButton from '../../components/common/AppButton'
import CounterButton from '../../components/common/CounterButton'
import colors from '../../config/colors'
import SizeButton from '../../components/SizeButton'

import { styles } from './style'

const ProductScreen = ({ navigation, route }) => {
  const listing = route.params

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
          <Text style={{ color: colors.secondary, fontSize: 14 }}>{listing.description}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <AppButton title='ADD TO CART' />
        </View>
      </View>
    </View>
  )
}

export default ProductScreen
