import React from 'react'
import { View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { styles } from './style'

function CartButton(props) {
  return (
    <View style={styles.container}>
      <AntDesign name='shoppingcart' size={32} color={colors.white} />
    </View>
  )
}

export default CartButton
