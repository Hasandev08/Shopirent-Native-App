import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

const ImageInput = ({ onPress, imageUri }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </TouchableOpacity>
    </View>
  )
}

export default ImageInput
