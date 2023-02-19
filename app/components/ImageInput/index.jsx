import React from 'react'
import { Image, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  )
}

export default ImageInput
