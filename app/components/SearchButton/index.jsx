import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

function SearchButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name='search1' color={colors.white} size={32} />
      </View>
    </TouchableOpacity>
  )
}

export default SearchButton
